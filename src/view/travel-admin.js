import React, { useState } from 'react';
import { Box } from '@mui/material';
<<<<<<< HEAD
import { Add } from '@mui/icons-material';
import Header from '../components/header';
import Buttons from '../components/button';
=======
import Header from '../components/header';
import Buttons from '../components/button';
import { Add } from '@mui/icons-material';
>>>>>>> f0b0f372e65cb72b764e951c27ceee8928574754
import { AccommodationCard } from './accommodation';
import { AccommodationModal } from '../components/AccommodationModal';
import { unloggedInUser } from '../helpers/login.helpers';

const TravelAdmin = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const role =
    JSON.parse(localStorage.getItem('userCredentials')) ?? unloggedInUser;
  return (
    <Box sx={{ padding: '0px' }}>
      <Header title="Accommodations" />
      {role === null || role?.role_id === 2 || role?.role_id === 1 ? (
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
<<<<<<< HEAD
          value="Create Accommodation"
=======
          value={'Create Accommodation'}
>>>>>>> f0b0f372e65cb72b764e951c27ceee8928574754
          onClick={handleOpen}
        />
      ) : null}
      <AccommodationModal
        open={open}
<<<<<<< HEAD
        title="Create Accommodation"
=======
        title={'Create Accommodation'}
>>>>>>> f0b0f372e65cb72b764e951c27ceee8928574754
        handleClose={handleClose}
      />

      <AccommodationCard />
    </Box>
  );
};
export default TravelAdmin;
