import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

const array = ["McDonald's", "KFC", "Starbucks", "Львівські круасани", "Burger King"]

function ShopsBox() {
  return (
    <Box maxWidth='600px' >
        <Grid item paddingBottom='40px'>
            <Typography sx={{
                justifyContent: 'center',
                display: 'flex',
                fontFamily: 'Montserrat',
                fontSize: '24px',
                fontWeight: '600',

            }}>Shops:</Typography>
        </Grid>
        <Grid container direction='column'>
            {array.map(item => {
                return(<Grid item justifyContent='center' display='flex'>
                    <Button variant='text' sx={{
                        color: 'black',
                        ontFamily: 'Montserrat',
                        fontSize: '20px',
                        fontWeight: '500',
                        marginBottom: '20px',
                    }}>{item}</Button>
                </Grid>);
            })}
        </Grid>
    </Box>
  )
}

export default ShopsBox