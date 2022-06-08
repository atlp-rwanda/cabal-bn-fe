/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Grid, Menu, MenuItem, Stack, styled } from '@mui/material';
import { Link, matchPath } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import DashboardLogo from '../assets/DashboardLogo.svg';
import settingsIcon from '../assets/settings-icon.svg';

const role = JSON.parse(localStorage.getItem('userCredentials'))?.role_id;

const StyledMenu=styled(Menu)(({theme})=>({
  '& .MuiPaper-root': {
    width: '215px',
    marginLeft: '-12px',
    marginTop: '90px',
    backgroundColor: '#0B2C5f',
    borderRadius: 0,
  }
}))

const SideBar = ({ sideBarLinks }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick=(event)=>{
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };


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
        {role===1?(
          <>
          <Stack onClick={handleClick} direction="row" gap={1} padding="16px" sx={{cursor:'pointer'}}>
          <img src={settingsIcon} alt="icon" />
          <Typography sx={{
                  color: '#fff',
                  fontWeight: 450,
                  fontSize: 20,
                  // color: theme?.pallete.primary.text,
                  // fontSize: theme.typography.fontSize,
                }}>Settings</Typography>
          </Stack>
          <StyledMenu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            elevation={1}
          >
            <MenuItem onClick={handleClose}><Link to='/dashboard/roles' style={{textDecoration: 'none',color: '#fff'}}> Assign role</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to='/dashboard/settings' style={{textDecoration: 'none', color: '#fff'}}> Assign manager</Link></MenuItem>
          </StyledMenu>
          </>
        ):(null)}

      </Box>
    </Box>
  );
};

export default SideBar;
