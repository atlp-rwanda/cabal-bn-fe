/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-spacing */
import { Box, styled } from '@mui/material';
import React from 'react';

const StyeldeFooter = styled(Box)(({theme})=>({
   position: 'absolute',
   bottom: '0',
   left: '0',
   right: '0',
   backgroundColor: '#00095E',
   color: '#8A8FAB',
   paddingBottom: '200px',
}))

const Footer = ()=>{
    return (
        <StyeldeFooter>
            <p>footer</p>
        </StyeldeFooter>
    )
}

export default Footer
