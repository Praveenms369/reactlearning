import { Grid } from '@mui/material'
import React from 'react'
import Header from '../Home/header'

function Layout({children}) {
  return (
    <Grid>
        <Header></Header> 
        {children}
    </Grid>
  )
}

export default Layout