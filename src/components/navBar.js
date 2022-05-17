/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled, Link, MenuItem } from '@mui/material';
import logo from '../assets/Logo.svg';
import MenuBar from '../assets/MenuBar.svg';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

const Navlinks = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

const Links = styled(Typography)({
  fontSize: '18px',
  fontWeight: 500,
  padding: '20px',
  fontFamily: 'Josefin Sans, sans-serif',
});
const NavBar = () => {
  const pages = ['Home', 'About Us', 'Accommodation', 'Sign In', 'Sign Up'];
  const [open, setOpen] = React.useState(false);
  const close = () => {
    setOpen(false);
  };

  return (
    <AppBar sx={{ background: '#F8F9FA', position: 'sticky' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="#">
          <img src={logo} alt="Logo" style={{ width: 100, height: 50 }} />
        </Link>
        <Navlinks
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
          }}
        >
          {pages.map((link, index) => (
            <Links key={index}>
              <Link href="#" underline="none" color="#00095E">
                {link}
              </Link>
            </Links>
          ))}
        </Navlinks>
        <Box
          sx={{
            fontSize: '18px',
            display: {
              xs: 'flex',
              md: 'none',
            },
          }}
          onClick={(e) => (open ? setOpen(false) : setOpen(true))}
        >
          <img src={MenuBar} alt="menu bar" />
        </Box>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={() => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {pages.map((link, index) => (
            <MenuItem
              key={index}
              sx={{
                fontFamily: 'Josefin Sans, sans-serif',
                color: '#00095E',
                fontSize: '18px',
              }}
              onClick={close}
            >
              <Links>
                <Link href="#" underline="none" color="#00095E">
                  {link}
                </Link>
              </Links>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
