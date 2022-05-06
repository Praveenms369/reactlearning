import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Singin() {
  return (
    <Box sx={{ mt: 20, mb: 20, mx: 20 }}>
      <Box sx={{ mb: 2 }}>
        <TextField
          required
          id='outlined-basic'
          label='Email'
          variant='outlined'
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          required
          id='outlined-basic'
          type={'password'}
          label='Password'
          variant='outlined'
        />
      </Box>
      <Box>
        <Button variant='contained'>Signin</Button>
      </Box>
    </Box>
  );
}

export default Singin;
