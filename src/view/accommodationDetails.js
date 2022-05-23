import React, { useEffect, useState } from 'react';
import { Typography, Grid, CardActionArea, Paper, styled } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Stars } from '../components/landing/stars.component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import store from '../redux/store';
import { Add } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchSingleAccommodation } from '../redux/actions/accommodation.action';
import { useSelector, useDispatch } from 'react-redux';
import SimpleImageSlider from 'react-simple-image-slider';
import Buttons from '../components/button';

const styles = {
  display: 'flex',
  marginTop: '50px',
  flexDirection: 'column',
  width: '80%',
};
const papeStyles = {
  display: 'flex',
  position: 'relative',
  width: '300px',
  height: '100px',
  background: 'transparent',
  top: '40%',
  color: 'white',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection: 'column',
};
export const AccommodationDetails = () => {
  const accommodationState = useSelector(
    (state) => state.fetchSingleAccommodationReducer,
  );
  const path = window.location.pathname.split('/');
  const id = path[path.length - 1];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleAccommodation(id));
  }, [id]);

  const data = accommodationState.accommodations?.data;
  return (
    <Grid container key="main-container" sx={{ marginBottom: '20px' }}>
      {!accommodationState?.pending === true && (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          sx={{
            height: 500,
            width: '100%',
            backgroundImage: `url(${data?.images[0]})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Paper elevation={2} sx={papeStyles}>
            <Typography variant="h4">{data?.name}</Typography>
            <Typography variant="h6">Kigali</Typography>
          </Paper>
        </Grid>
      )}
      {!accommodationState?.pending === true && (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          width="100%"
        >
          <div style={styles}>
            <Typography color="#00095E">Description:</Typography>
            <Typography variant="p">{data?.description}</Typography>
          </div>
          <div style={styles}>
            <Typography color="#00095E">Services:</Typography>

            {data?.services?.map((service) => (
              <div>
                <ul>
                  <li>
                    <Typography variant="p">{service}</Typography>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div style={styles}>
            <Typography color="#00095E">Amenities:</Typography>

            {data?.amenities?.map((amenity) => (
              <div>
                <ul>
                  <li>
                    <Typography variant="p">{amenity}</Typography>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div style={styles}>
            <Typography color="#00095E">Images:</Typography>
            <Grid container spacing={1}>
              {data?.images?.map((image) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <img
                    src={image}
                    alt="limg"
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
          <div style={styles} display="inline">
            <Typography color="#00095E">Ratings:</Typography>
            <Stars rates={data?.rates} />
          </div>
        </Grid>
      )}
      {!accommodationState?.pending === true && (
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
          sx={{ fontFamily: 'Josefin Sans, sans-serif' }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#00095E', margin: '50px 0 20px 0' }}
          >
            All Rooms in this accommodation
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: '#00095E', fontWeight: 400, marginBottom: '20px' }}
          >
            Rooms
          </Typography>
          <Buttons
            variant="contained"
            sx={{
              width: 280,
              backgroundColor: '#00095E',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '500',
              fontSize: '16px',
              color: 'white',
              marginBottom: '20px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#00095E',
              },
            }}
            startIcon={<Add />}
            value={'Create a Room'}
          />
          <Grid item>
            <Grid
              container
              // justify="center"
              // alignItems="center"
              // sx={{
              //   width: '100%',
              //   justifyContent: 'center',
              //   color: '#1A2D6D',
              //   alignItems: 'center',
              // }}
            >
              {data?.Rooms.map((room) => (
                <Grid item md={4}>
                  <Card sx={{ width: 280 }}>
                    <CardActionArea>
                      <SimpleImageSlider
                        width={300}
                        height={150}
                        images={room.images}
                        showBullets={true}
                        showNavs={true}
                      />
                    </CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          display: 'flex',
                          margin: '15px 0 15px 0',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          color="#00095E"
                          component="div"
                          fontFamily="Josefin Sans, sans-serif"
                        >
                          Room: {room.id}
                        </Typography>
                        <Typography
                          color="#FFC800"
                          component="div"
                          fontFamily="Josefin Sans, sans-serif"
                        >
                          {room.price}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          color: '#677F8B',
                          textAlign: 'justify',
                          fontSize: '12px',
                          fontFamily: 'Roboto, sans-serif',
                        }}
                      >
                        {room.details}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
