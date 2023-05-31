import React from 'react'
import Header from '../Header/Header'
import { Box, Grid } from '@mui/material'
import ShopsBox from './ShopsBox'
import ShopItemsBox from './ShopItemsBox'

function ShopsPage() {
  return (
    <Box>
        <Header />
        <Grid container direction='row' paddingTop="80px">
            <Grid item xs={4}>
                <ShopsBox />
            </Grid>
            <Grid item xs={8}>
                <ShopItemsBox />
            </Grid>
        </Grid>
    </Box>
  )
}

export default ShopsPage