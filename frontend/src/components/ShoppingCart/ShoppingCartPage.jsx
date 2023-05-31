import React, { useState } from 'react'
import Header from '../Header/Header'
import { Box, Grid } from '@mui/material'
import UserInformation from './UserInformation'
import TotalPrice from './TotalPrice'
import SubmitButton from './SubmitButton'
import ItemCardShoppingCart from './ItemCardShoppingCart'

function ShoppingCartPage() {

  const [itemList, setItemList] = useState([
    { id: 1, title: 'Burger', price: 67, quantity: 1 },
    { id: 2, title: 'Burger', price: 67, quantity: 1 },
    { id: 3, title: 'Burger', price: 67, quantity: 1 },
    { id: 4, title: 'Burger', price: 67, quantity: 1 },
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      setItemList((prevItemList) =>
        prevItemList.filter((item) => item.id !== itemId)
      );
    } else {
      setItemList((prevItemList) =>
        prevItemList.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        })
      );
    }
  };

  const totalPrice = itemList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box>
      <Header />
      <Grid container direction='row' justifyContent='center' paddingRight='50px' paddingLeft='50px' paddingTop='80px' >
        <Grid item xs={5}>
          <UserInformation />
        </Grid>
        <Grid item xs={7}>
          <Grid container direction='column'>
            <Grid item>
              {itemList.map((item) => (
                <ItemCardShoppingCart key={item.id} item={item} onQuantityChange={handleQuantityChange}
                title={item.title} price={item.price} />
              ))}
            </Grid>
            <Grid item>
              <Grid container direction='row' paddingTop='60px' paddingBottom='30px' paddingRight="100px" justifyContent='flex-end' spacing={4}>
                <Grid item>
                  <TotalPrice totalPrice = {totalPrice} />
                </Grid>
                <Grid item>
                  <SubmitButton />
                </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ShoppingCartPage