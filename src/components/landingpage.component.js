/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-spacing */
import { AppBar, Box, CssBaseline, Grid, Link, Stack, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Footer from './footer.component';
import Location from './landing/locationspart';
import logo from './landing/logo.png'
import WelcomeText from './landing/welcometext';
import About from './landing/about';
import Service from './landing/services';

const StyledAppBar = styled(AppBar)(({theme})=>({
    backgroundColor: 'white',
    color: 'black',
    position: 'fixed',
    [theme.breakpoints.down('sm')]: {
       width: '',
    },
}))

const StyledStack = styled(Stack)(({theme})=>({
    position: 'absolute',
    right: '10%',
    gap: '20px',
}))

const LandingPage = ()=>{
   return (
     <Grid container direction="column" gap={10}>
         <Grid item>
           <StyledAppBar>
              <Toolbar>
                  <img src={logo} alt="logo" style={{width: '130.2px', height: '62px' }}/>
                  <StyledStack direction="row">
                   <Link href="/"><Typography>Home</Typography></Link>
                   <Link href="/About"><Typography>About</Typography></Link>
                   <Link href="/Accommodation"><Typography>Accommodation</Typography></Link>
                   <Link href="/SignIn"><Typography>Sign In</Typography></Link>
                   <Link href="/SignUp"><Typography>Sign Up</Typography></Link>
                  </StyledStack>
              </Toolbar>
           </StyledAppBar>
         </Grid>
         <WelcomeText />
         <Location />
         <About />
         <Service />
     </Grid>
   )
}

export default LandingPage
