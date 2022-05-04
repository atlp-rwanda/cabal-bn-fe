/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-spacing */
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import image from './image1.svg'

const Gri = ()=>{
    return (
      <Box>
          <Grid container direction="row" gap={32.5}>
              <Grid item xs={4.6}>
                  <img src={image} alt="travelling" style={{ width: '490px', height: '500px'}}/>
              </Grid>
              <Grid item xs={4} fontSize="20px" sx={{ marginTop: '20px'}}>
                  <Typography variant="h6" color="#7EA0FF" fontSize="20px">About</Typography>
                  <Typography variant="h6" color="#00095E" fontSize="35px">Get ready for a real time</Typography>
                  <Typography variant="h6" color="#00095E" fontSize="35px" sx={{ marginTop: '-14px'}}>Adventure</Typography>
                  <Typography variant="h8" component="p" sx={{ width: '90%', color: '#677F8B', marginTop: '20px' }}>
                  Let’s start your journey with us, your dream will come true. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit,
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam quis nostrud exercitation.
                  </Typography>
                  <Button variant="contained" sx={{ backgroundColor: '#FFC800', height: '55px', width: '220px', marginTop: '40px'}}>Get started</Button>
              </Grid>
          </Grid>
      </Box>
    )
}

const About = ()=>{
    return (
        <Grid item>
            <Gri />
        </Grid>
    )
}

export default About
