/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link, matchPath } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import DashboardLogo from '../assets/DashboardLogo.svg';

const SideBar = ({ sideBarLinks }) => {
  const theme = useTheme();
  return (
    <Box
      fullWidth
      sx={{
        backgroundColor:'#1A2D6D',
        // backgroundColor: theme?.pallete.primary.main,
        height: '100vh',
        position: 'sticky',
        top: 0,
        '@media (max-width:900px)': {
          display: 'none',
        },
      }}
    >
      <Link to="/" style={{ padding: '10px' }}>
        <img
          src={DashboardLogo}
          alt="Cabal- logo"
          style={{ width: 100, marginTop: '15px' }}
        />
      </Link>
      <Box sx={{ paddingTop: '50px', textAlign: 'center' }}>
        {sideBarLinks.map((links, index) => (
          <Grid
            key={links.id}
            container
            sx={{
              backgroundColor: matchPath(window.location.pathname, links.to)
              ? '#0B2C5f'
                // ? theme?.pallete.secondary.main
                : 'transparent',
              padding: '20px',
            }}
            key={index}
          >
            <Link
              to={links.to}
              key={links.link}
              style={{
                display: 'flex',
                cursor: 'pointer',
                textDecoration: 'none',
                // fontSize: theme.typography.fontSize,
              }}
            >
              <img
                src={links.icon}
                alt="icon"
                style={{ paddingRight: '10px' }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: '#fff'
                  // color: theme?.pallete.primary.text,
                  // fontSize: theme.typography.fontSize,
                }}
              >
                {links.link}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
