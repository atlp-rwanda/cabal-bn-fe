/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import InputField from '../components/input';

const login = () => (
  <Paper
    elevation={0}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      width: 'auto',
      height: '30vw',
    }}
  >
    <Typography variant="h3">Login</Typography>
    <InputField labelName="Email" />
    <InputField labelName="Password" />
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button buttonTheme="secondary" />
    </Link>
  </Paper>
);

export default login;
