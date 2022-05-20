import React from 'react';
import { Grid, Button } from '@mui/material';

export default ({ row, handleApprove, handleReject }) => (
  <Grid container justifyContent="center" alignItems="center">
    <Button
      variant="contained"
      disableElevation
      disabled={!!(row?.status === 'APPROVED' || row?.status === 'REJECTED')}
      sx={{
        backgroundColor:
          row?.status === 'APPROVED' || row?.status === 'REJECTED'
            ? '#EC5C5C'
            : '#0ABDA0',
        color: '#fff',
        fontSize: '10px',
        margin: '10px',
        width: '20%',
        '&:hover': {
          backgroundColor: '#0ABDA0',
          color: '#fff',
        },
      }}
      /* istanbul ignore next */
      onClick={() => handleApprove(row.id)}
    >
      Approve
    </Button>
    <Button
      variant="contained"
      disabled={!!(row?.status === 'APPROVED' || row?.status === 'REJECTED')}
      sx={{
        backgroundColor:
          row?.status === 'REJECTED' || row?.status === 'APPROVED'
            ? '#EC5C5C'
            : '#E13535',
        color: '#fff',
        fontSize: '10px',
        width: '20%',
        '&:hover': {
          backgroundColor: '#EC5C5C',
          color: '#fff',
        },
      }}
      /* istanbul ignore next */
      onClick={() => handleReject(row.id)}
    >
      Reject
    </Button>
  </Grid>
);
