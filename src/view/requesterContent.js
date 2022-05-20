import { Typography, Box, Grid } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/styles';
import RequesterTable from './requester-table';
import Header from '../components/header';

const RequesterContent = () => (
  <Box>
    <Header title="Trips" />
    <RequesterTable />
  </Box>
);

export default RequesterContent;
