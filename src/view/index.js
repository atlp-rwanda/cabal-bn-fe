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
  </Container>
);

export default LandingPage;
