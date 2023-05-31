import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function ItemCard(props) {
  return (
    <Card>
        <Grid container direction="column">
            <Grid item xs={12} sm={6}>
            <CardMedia
                component="img"
                height="100%"
                image="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                alt={props.title}
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
                    float: 'left',
                }}
                >
                Burger
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                variant="outlined"
                sx={{
                    width: 'fit-content',
                    color: 'black',
                    borderColor: 'black',
                    borderRadius: '20px',
                    marginLeft: 'auto',
                }}
                >
                Add to cart
                </Button>
            </CardActions>
            </Grid>
      </Grid>
    </Card>
  )
}

export default ItemCard