import { Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function ItemCardShoppingCart({item, onQuantityChange}) {

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        onQuantityChange(item.id, newQuantity);
    };

  return (
    <Card sx={{
        width: '800px',
        marginBottom: '20px'
    }}>
        <Grid container direction="row">
            <Grid item xs={12} sm={6}>
            <CardMedia
                component="img"
                height="180px"
                image="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt={item.title}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <CardContent>
                <Typography
                sx={{
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 500,
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    display: 'flex',
                }}
                >
                    {item.title}
                </Typography>
                <Typography sx={{
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: 500,
                    fontFamily: 'Montserrat',
                    justifyContent: 'center',
                    display: 'flex',
                }}>
                    Price: {item.price}
                </Typography>
            </CardContent>
            <CardActions >
                <Grid container justifyContent="center">
                    <Grid item>
                        <TextField type="number" defaultValue={1} value={item.quantity}
                        onChange={handleQuantityChange} sx={{ width: '100px', textAlign: 'center' }} ></TextField>
                    </Grid>
                </Grid>
            </CardActions>
            </Grid>
      </Grid>
    </Card>
  )
}

export default ItemCardShoppingCart