/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
import {
  Box,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  styled,
  Skeleton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getTrip } from '../redux/actions/read_one_trip.action';
import { useNavigate } from 'react-router-dom';
import format from 'date-fns/format';

const StyledTYpography = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  color: '#1A2D6D',
}));

export const ReadOneTrip = () => {
  const { id } = useParams();
  const { role } = useParams();
  const { trip, loading } = useSelector((state) => state.getTripReducer);
  const { detailed } = useSelector((state) => state.getUserReducer);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('userCredentials'));

  const history = useNavigate();
  useEffect(() => {
    if (!user) history('/login');
  },[]);

  useEffect(() => {
    dispatch(getTrip(id));
  }, []);

  return (
    <Box
      sx={{
        marginLeft: '5%',
        marginTop: '2%',
      }}
    >
      <Typography variant="h5" color="#1A2D6D">
        Trip details
      </Typography>
      <Grid
        gap={3}
        direction="column"
        minHeight={user.role_id === '1' || user.role_id === '3' ? '500px' : '465px'}
        sx={{
          backgroundColor: '#EBF2FA',
          width: {
            xs: '350px',
            md: '800px',
          },

          padding: '30px',
          marginTop: '30px',
        }}
        container
      >
        <Grid item>
          <StyledTYpography>Reason</StyledTYpography>
          {loading ? (
           <Skeleton width={200}/>
          ) : (
            <Typography color="#7EA0FF">{trip.reason}</Typography>
            
          )}
        </Grid>
        <Grid item>
          <StyledTYpography>Status</StyledTYpography>
          {loading ? (
            <Skeleton width={200}/>
            
          ) : (
            <Typography color="#7EA0FF">{trip.status}</Typography>
          )}
        </Grid>
        <Grid item>
          <StyledTYpography>Destinations</StyledTYpography>
          {loading?(
            <Skeleton width={200}/> 
          ):(
            trip.length !== 0 &&
              trip.arrivalLocations.map((dest) => (
                <Typography color="#7EA0FF">{`${dest.Accommodation.name}: ${dest.days} days`}</Typography>
              ))
          )}
          
          
        </Grid>
        <Grid item>
          <StyledTYpography>Start date</StyledTYpography>
          {loading ? (
            <Skeleton width={200}/>
          ) : (
            trip.length!==0&&<Typography color="#7EA0FF">{format(new Date(trip.tripDate),'MMM dd yyy')}</Typography>
            
            
          )}
        </Grid>
        <Grid item>
          <StyledTYpography>End date</StyledTYpography>
          {loading ? (
            <Skeleton width={200}/>
          ) : (
            trip.length!==0&&<Typography color="#7EA0FF">{format(new Date(trip.returnDate),'MMM dd yyy')}</Typography>
            
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
