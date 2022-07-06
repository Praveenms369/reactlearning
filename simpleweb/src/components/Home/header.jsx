import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Grid container marginLeft={10} mt={5} spacing={2}>
      <Grid item xs={3}>
        REACT TRAINING
      </Grid>

      <Grid item xs={9}>
        <Grid container spacing={0.5}>
          <Grid item xs={1.5}>
            <Link to='/training'>Corporate Training</Link>
          </Grid>
          <Grid item xs={1.5}>
            <Link to='/public-workshops'>PublicWorkshops</Link>
          </Grid>
          <Grid item xs={1.5}>
            <Link to='/online-courses'> Online Courses</Link>
          </Grid>
          <Grid item xs={1.5}>
            <Link to='/blog'>Blog</Link>
          </Grid>
          <Grid item xs={1.5}>
            <Link to='/contact'>Contact</Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
