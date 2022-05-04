/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-spacing */
import { Box, Button, Grid, styled, Typography } from '@mui/material';
import React from 'react';

const Buutton = styled(Button)(({theme})=>({
    backgroundColor: '#00095E',
    color: 'white',
    position: 'absolute',
    marginTop: '70px',
    marginLeft: '-150px',
    width: '250px',
    height: '60px',
    transition: '0.4s linear',
    '&:hover': {
        color: '#00095E',
        backgroundColor: '#F9A826',
    },
}))

const animation = {
    '&::before': {
        content: '',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        background: '#F9A826',
        zIndex: '-1',
        transition: 'transform 1s',
        transformOrigin: '0 0',
        transitionTimingFunction: 'cubic-bezier(0.5, 1.6, 0.4, 0.7)',
        transform: 'scaleY(0)',
    },
    '&:hover::before': {
        transform: 'scaleY(1)',
    },
}

const Line = styled('div')(({theme})=>({
    backgroundColor: '#F9A826',
    position: 'absolute',
    width: '309px',
    height: '10px',
    marginTop: '65px',
    marginLeft: '549px',
    borderRadius: '30px',
    zIndex: '-10',
}))

const WelcomeText = ()=>{
    return (
        <Grid item sx={{ paddingTop: '100px', textAlign: 'center', marginLeft: '-110px' }}>
            <Line />
            <Typography variant="h4">Life long memories just</Typography>
            <Typography variant="h4">a few seconds away</Typography>
            <Typography variant="h6" sx={{ paddingTop: '33px' }}>Lets start your journey with us, your dreams will come true</Typography>
            <Buutton style={animation}>Explore Destinations</Buutton>
        </Grid>
    )
}

export default WelcomeText
