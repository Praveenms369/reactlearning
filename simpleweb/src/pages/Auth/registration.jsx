import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { postUserRegistration } from '../../services/auth/index';
function Registration() {
  const navigate = useNavigate();
  const userInfo = { FirstName: '', LastName: '', EmailId: '', Password: '' };
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUserInfo] = useState(userInfo);

  const handleRegistration = async () => {
    debugger;
    // const req = {
    //   EmailId: email,
    //   Password: password,
    //   FisrtName: fname,
    //   LastName: lname,
    // };
    // const res = await postUserRegistration(user);
    debugger;
    // if (res.data)
    navigate('/sigin');
  };

  const handleChange = (e) => {
    debugger;
    const value = e.target.value;
    const name = e.target.name;
    const userObj = user;
    userObj[name] = value;
    setUserInfo(userObj);
    // setUserInfo(() => ({
    //   ...user,
    //   [name]: value,
    // }));
  };

  // const handleFnameChange = (z) => {
  //   debugger;
  //   const value = z.target.value;
  //   setFname(value);
  // };

  // const handleLastnameChange = (z) => {
  //   debugger;
  //   const value = z.target.value;
  //   setLname(value);
  // };

  // const handleEmailChange = (z) => {
  //   debugger;
  //   const value = z.target.value;
  //   setEmail(value);
  // };
  // const handlePasswordChange = (z) => {
  //   debugger;
  //   const value = z.target.value;
  //   setPassword(value);
  // };

  return (
    <Box>
      <Box
        sx={{
          mt: 20,
          mb: 20,
          mx: 20,
          ml: 70,
          height: 400,
          width: 450,
        }}
        display='flex'
        flexDirection={'row'}
        justifyContent='center'
        padding={5}
      >
        <Grid container spacing={1} xs={12} lineHeight={1}>
          <Grid item xs={6}>
            <TextField
              required
              id='outlined-basic'
              label='First Name'
              variant='outlined'
              name='FirstName'
              value={user.FirstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id='outlined-basic'
              required
              label='Last Name'
              variant='outlined'
              name='LastName'
              value={user.LastName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='outlined-basic'
              label='Email'
              variant='outlined'
              name='EmailId'
              value={user.EmailId}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type='password'
              id='outlined-basic'
              label='Password'
              variant='outlined'
              name='Password'
              value={user.Password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label='I want to djshdjsdjsdjbs ds ds dsdvhsvdhsvdhsvdsvdfsbd sd as'
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant='contained' onClick={handleRegistration}>
              Sign UP
            </Button>
          </Grid>
          <Grid xs={6}></Grid>
          <Grid>
            <Link style={{ color: 'blue' }} to='/sigin'>
              Already having an account?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Registration;
