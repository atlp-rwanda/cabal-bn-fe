/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <Container>
    <Typography variant="subtitle1">please click here to login</Typography>
    <Link to="/login" style={{ textDecoration: 'none', color: 'red' }}>
      login
    </Link>
    <Typography variant="subtitle1">please click here to signup</Typography>
    <Link to="/signup" style={{ textDecoration: 'none', color: 'blue' }}>
      Signup
    </Link>
    <Typography>
      <Link to="/forgot" style={{ textDecoration: 'none', color: 'red' }}>
        Forgot
      </Link>
    </Typography>
    <Typography>
      <Link
        to="/resetPassword"
        style={{ textDecoration: 'none', color: 'red' }}
      >
        ResetPassword
      </Link>
    </Typography>
  </Container>
);

export default LandingPage;
