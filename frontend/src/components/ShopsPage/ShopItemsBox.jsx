import { Box, Grid } from '@mui/material'
import React from 'react'
import ItemCard from './ItemCard';

const array = ["McDonald's", "KFC", "Royal Kebab", "Львівські круасани"]


function ShopItemsBox() {
  return (
    <Box>
         <Grid container spacing={4} paddingRight='40px' sx={{
                  textAlign: 'center',
                  width: "100%",
                  paddingBottom: "3%",
                  margin: "0",
                  direction: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
            {array.map(item => {
                return(<Grid item lg={3.5} >
                    <ItemCard />
                </Grid>);
            })}
        </Grid>
    </Box>
  )
}

export default ShopItemsBox