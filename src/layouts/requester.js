/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Box, Badge, Avatar, Paper, Typography } from '@mui/material';
import io from 'socket.io-client';
import { toast } from 'react-toastify';
import { loggedInUser } from '../redux/actions/auth';
import NavBar from '../components/navBar';
import SideBar from '../components/sidebar';
import MobLink from '../components/mobLinks';
import Notification from '../view/notificationsPanel/notification';
import accommodationIcon from '../assets/accommodationIcon.svg';
import chatIcon from '../assets/chatIcon.svg';
import tripIcon from '../assets/tripIcon.svg';
import bookingIcon from '../assets/bookingIcon.svg';
import logo from '../assets/Logo.svg';
import store from '../redux/store';
import { logoutUser } from '../redux/actions/logout.action';
import { retrieveAction } from '../redux/actions/profile.action';
import settingsIcon from '../assets/settings-icon.svg';
import { fetchNotifications } from '../redux/actions/notifications.action';

const token = JSON.parse(localStorage.getItem('userCredentials'))?.token;
const socket = io('https://barefoot-backend-development.herokuapp.com/', {
  auth: { token },
});

const DashboardPreview = () => {
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.loggedInUser);
  const { notifications, unread } = useSelector((state) => state.notifications);
  const { user } = useSelector((state) => state.profileReducer.data);
  const roleId = JSON.parse(localStorage.getItem('userCredentials'));
  const redirect = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  if (!roleId) {
    return <Navigate to="/login" />;
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutClick = async () => {
    await store.dispatch(logoutUser());
    const { userReducer } = store.getState();
    console.log(userReducer, 'these are logout');
    if (userReducer.isLogged === false) {
      localStorage.removeItem('userCredentials');
      redirect('/login');
    }
  };
  const fetchProfile = async () => {
    await store.dispatch(retrieveAction());
    store.subscribe(() => {
      const { profileReducer } = store.getState();
      setName(profileReducer.data.user?.first_name);
      setProfile(profileReducer.data.user?.profile_picture);
    });
  };
  useEffect(() => {
    fetchProfile();
    dispatch(loggedInUser());
    // if (user && notifications.to_user_id === user.profile?.user_id) {
    socket.on('notification', (notification) => {
      toast.success(notification);
      dispatch(fetchNotifications(1, 10));
    });
    // }
  }, []);

  const pages = [
    `${roleId?.first_name}`,
    <Badge badgeContent={unread} color="error" badge sx={{ color: '#FFC800' }}>
      <Notification notifications={notifications} unread={unread} />
    </Badge>,
    data.status === 200 ? (
      <Avatar
        src={user?.profile_picture}
        alt="prifle image"
        onClick={handleClick}
      />
    ) : (
      <Avatar
        src={roleId.profile_picture}
        salt="prifle image"
        onClick={handleClick}
      />
    ),
  ];
  const sideBarLinks = [
    {
      to: '/dashboard/trips',
      link: 'Trips',
      icon: tripIcon,
      id: 1,
    },
    {
      to: '/dashboard/accommodations',
      link: 'Accommodation',
      icon: accommodationIcon,
      id: 2,
    },
    {
      to: '/dashboard/bookings',
      link: 'Bookings',
      icon: bookingIcon,
      id: 3,
    },
    {
      to: '/dashboard/chats',
      link: 'Chats',
      icon: chatIcon,
      id: 4,
    },
  ];

  if (roleId.role_id === 1) {
    sideBarLinks.push({
      to: '/dashboard/roles',
      link: 'Settings',
      icon: settingsIcon,
    });
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar sideBarLinks={sideBarLinks} />
      <Paper elevation={0} sx={{ width: { xs: '100%', md: '100%' } }}>
        <NavBar pages={pages} logo={logo} requester />
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Link
              to="/dashboard/profile"
              style={{
                textDecoration: 'none',
                color: '#00095E',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ListItemIcon>
                <ManageAccountsIcon sx={{ color: '#00095E' }} />
              </ListItemIcon>
              <Typography>Profile</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={logoutClick}>
            <ListItemIcon>
              <Logout sx={{ color: '#00095E' }} />
            </ListItemIcon>
            <Typography sx={{ color: '#00095E' }}>
              {/* <Link to="#" style={{ textDecoration: 'none', color: '#00095E' }} onClick={logoutClick}> */}
              Logout
              {/* </Link> */}
            </Typography>
          </MenuItem>
        </Menu>
        <Paper elevation={0} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MobLink sideBarLinks={sideBarLinks} />
        </Paper>
        <Outlet />
      </Paper>
    </Box>
  );
};
export default DashboardPreview;
