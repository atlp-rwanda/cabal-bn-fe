import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Header from '../components/header';
import Buttons from '../components/button';
import { getAllLocations } from '../redux/actions/location.action';
import store from '../redux/store';
import { makeStyles } from '@material-ui/core/styles';
import { Add } from '@mui/icons-material';
import { AccommodationCard } from './accommodation';
import { fetchAccommodationsAction } from '../redux/actions/accommodation.action';
import { useDispatch, useSelector } from 'react-redux';
import { AccommodationModal } from '../components/AccommodationModal';

const TravelAdmin = () => {
  const [open, setOpen] = useState(false);
  const [fetchLocation, setFetchLocation] = useState([]);
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const populateSelectLocation = async () => {
    await store.dispatch(getAllLocations());
    const { results } = store.getState().locationReducer.data.data;
    setFetchLocation(results);
    dispatch(fetchAccommodationsAction(1, 6));
  };

  useEffect(() => {
    populateSelectLocation();
  }, [dispatch]);

  const useStyle = makeStyles((theme) => ({
    formControl: {
      [theme.breakpoints.down('xs')]: {
        width: 280,
        minHeight: 20,
        margin: '30px 0px',
      },
      width: 350,
      minHeight: 50,
      margin: '20px 0px',
    },
  }));

  const role = JSON.parse(localStorage.getItem('userCredentials'));

  const loading = useSelector(
    (state) => state.createAccommodationReducer.pending,
  );

  return (
    <Box sx={{ padding: '0px' }}>
      <Header title="Accommodations" />
      {role.role_id === 2 || role.role_id === 1 ? (
        <Buttons
          variant="contained"
          sx={{
            display: 'flex',
            width: 280,
            left: '30px',
            backgroundColor: '#00095E',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#00095E',
            },
            '@media (max-width:900px)': {
              marginTop: '30px',
              width: '280px',
            },
          }}
          startIcon={<Add />}
          value={'Create Accommodation'}
          onClick={handleOpen}
        />
      ) : null}
      <AccommodationModal
        open={open}
        title={'Create Accommodation'}
        handleClose={handleClose}
      />

      <AccommodationCard />
    </Box>
  );
};
export default TravelAdmin;
