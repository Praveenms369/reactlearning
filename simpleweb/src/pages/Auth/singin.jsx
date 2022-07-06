import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { postUserSignIn } from '../../services/auth';
import { useNavigate, Link } from 'react-router-dom';

function Singin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    debugger;
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    debugger;
    const value = e.target.value;
    setPassword(value);
  };

  async function handleLogin() {
    debugger;
    navigate('/dashboard');
    // const req = {
    //   EmailId: email,
    //   Password: password,
    // };
    // const res = await postUserSignIn(req);
  }

  return (
    <Box sx={{ mt: 20, mb: 20, mx: 20 }}>
      <Box sx={{ mb: 2 }}>
        <TextField
          required
          id='outlined-basic'
          label='Email'
          value={email}
          variant='outlined'
          onChange={handleEmailChange}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          required
          value={password}
          id='outlined-basic'
          type={'password'}
          label='Password'
          variant='outlined'
          onChange={handlePasswordChange}
        />
      </Box>
      <Box>
        <Button onClick={handleLogin} variant='contained'>
          Signin
        </Button>
        Don't have account? <Link to='/'>Sign up</Link>
      </Box>
    </Box>
  );
}

export default Singin;
