/* eslint-disable object-curly-newline */
import React from 'react';
import { Button } from '@mui/material';

const button = ({ buttonTheme }) => (
  <Button
    variant="contained"
    sx={{ textDecoration: 'none' }}
    color={buttonTheme}
  >
    Login
  </Button>
);

export default button;
