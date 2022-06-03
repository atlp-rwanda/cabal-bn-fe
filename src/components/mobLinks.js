/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import { Typography, Box, Container, Paper } from '@mui/material';
import { Link, matchPath } from 'react-router-dom';

import React from 'react';

const MobLink = ({ sideBarLinks }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
    {sideBarLinks.map((links) => (
      <Paper key={links.id} elevation={0}>
        <Link
          to={links.to}
          key={links.link}
          style={{
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'start',
            alignItems: 'center',
            borderRadius: '10px',
            marginTop: '10px',
            textDecoration: 'none',
            color: '#1A2D6D',
            textAlign: 'center',
            paddingLeft: '0px',
          }}
        >
          <Typography>{links.link}</Typography>
        </Link>
        <Container
          sx={{
            height: '0.5vh',
            backgroundColor: '#FFC800',
            display: matchPath(window.location.pathname, links.to)
              ? 'block'
              : 'none',
          }}
        />
      </Paper>
    ))}
  </Box>
);
export default MobLink;
