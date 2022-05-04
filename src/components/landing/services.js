/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-spacing */
import { Box, Card, CardContent, CardMedia, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import serve from './Group32.svg'
import servic from './Group33.svg'

const cardStyles = {
    boxShadow: '0 0 0 0',
    backgroundColor: '#EBF2FA',
    height: '410px',
    width: '354px',
    borderRadius: '0px',
}

const Service = ()=>{
    return (
        <Grid item sx={{ textAlign: 'center', paddingTop: '25px'}}>
            <Typography variant="h6" component="p" color="#7EA0FF">Our popular services</Typography>
            <Typography variant="h4" color="#00095E">Services</Typography>
            <Box sx={{ marginTop: '90px'}}>
                <Grid container direction="row" gap={16} justifyContent="center">
                    <Grid item>
                        <Card sx={cardStyles}>
                            <CardMedia component="img" image={servic} sx={{ width: '80%', marginTop: '50px', marginLeft: '39px'}} />
                            <CardContent sx={{ paddingTop: '50px'}}>
                                <Typography variant="h4" color="#00095E">Trip booking</Typography>
                                <Typography variant="h7" component="p">details</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card sx={cardStyles}>
                            <CardMedia component="img" image={serve} sx={{ width: '80%', marginTop: '50px', marginLeft: '39px' }} />
                            <CardContent sx={{ paddingTop: '50px'}}>
                                <Typography variant="h4" color="#00095E">Hotel booking</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}

export default Service
