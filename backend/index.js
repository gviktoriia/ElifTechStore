const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'store',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.get('/shops', (req, res) => {
  connection.query('SELECT DISTINCT shop FROM Goods', (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.get('/goods', (req, res) => {
  const { shop } = req.query;
  connection.query('SELECT * FROM Goods WHERE shop = ?', [shop], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});

app.post('/orders', (req, res) => {
  const { userData, orderedGoods, totalPrice } = req.body;
  const order = {
    user_name: userData.name,
    user_email: userData.email,
    user_phone: userData.phone,
    user_address: userData.address,
    total_price: totalPrice,
  };

  connection.query('INSERT INTO orders SET ?', order, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    const orderId = results.insertId;

    const orderedGoodsData = orderedGoods.map((good) => ({
      order_id: orderId,
      good_id: good.id,
      quantity: good.quantity,
    }));

    connection.query('INSERT INTO ordered_goods (order_id, good_id, quantity) VALUES ?', [orderedGoodsData.map(Object.values)], (err) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      res.json({ message: 'Order received successfully' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    connection.end((err) => {
      if (err) {
        console.error('Error closing the database connection:', err);
        return;
      }
      console.log('Database connection closed');
      process.exit(0);
    });
  });
});
