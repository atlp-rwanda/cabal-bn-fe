/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-spacing */
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import React from 'react';
import image from './landscape.jpg'
import giraffe from './giraffe.png'
import airplane from './airplane.svg'

const Stylepaper=styled(Paper)(({theme})=>({
    height: '200px',
    width: '240px',
}))

const Lists = ()=>{
    return (
        <Grid gap={7} direction="row" container sx={{ position: 'absolute', top: '160%', left: '22%' }}>
            <Grid item sx={{ position: 'absolute', bottom: '120%', textAlign: 'center', left: '18%'}}>
                <Typography variant="h6" sx={{ color: '#7EA0FF' }}>Check our most travelled locations</Typography>
                <Typography variant="h3" sx={{ color: '#00095E' }}>Locations</Typography>
            </Grid>
            <Grid item>
            <Stylepaper elevation={3}>
                <Grid direction="column">
                    <Grid item>
                        <img src={giraffe} alt="location" style={{ width: '100%', height: '130px' }} />
                    </Grid>
                    <Grid item sx={{ padding: '12px' }}>Kigali</Grid>
                    <Grid item sx={{ marginLeft: '12px' }}>Rwanda</Grid>
                </Grid>
            </Stylepaper>
            </Grid>
            <Grid item>
            <Stylepaper>1</Stylepaper>
            </Grid>
            <Grid item>
            <Stylepaper>2</Stylepaper>
            </Grid>
        </Grid>
    )
}

const Location = ()=>{
    return (
        <Grid item sx={{paddingTop: '20px'}}>
            <img src={airplane} alt="airplane" style={{ position: 'absolute', marginTop: '40px', marginLeft: '180px'}}/>
            <img src={image} alt="landscape banner" style={{ height: '942px', marginLeft: '-147px' }} />
            <Lists />
        </Grid>
    )
}

export default Location
