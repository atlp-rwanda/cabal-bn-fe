import { Typography, Box, Grid } from '@mui/material';
import React from 'react';
import RequesterTable from './requester-table';
import { useTheme } from '@mui/styles';
import Header from '../components/header';

const RequesterContent = () => {
  return (
    <Box>
      <Header title="Trips" />
      <RequesterTable />
    </Box>
  );
};

export default RequesterContent;
