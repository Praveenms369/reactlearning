import React from 'react'
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box"
function Registration() {
  return (
    <Box sx={{ flexGrow: 1 }}>
         <Grid container spacing={2} columns={16}>
         <Grid item xs={8}>
         Item 1
        </Grid>
        <Grid item xs={8}>
         Item 2
        </Grid>
         </Grid>
        </Box>
  )
}

export default Registration