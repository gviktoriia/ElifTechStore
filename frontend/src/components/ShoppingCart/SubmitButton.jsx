import { Button } from '@mui/material'
import React from 'react'

function SubmitButton() {
  return (
    <Button variant='outlined' sx={{
        color: 'black',
        borderColor: 'black',
        fontFamily: 'Montserrat',
        fontSize: '20px',
        height: '40px',
        borderRadius: '40px',
        "&:hover": {
            backgroundColor: 'black',
            color: 'white',
        }
    }}>Submit</Button>
  )
}

export default SubmitButton