import React, { useEffect } from 'react';
import { Box, AppBar, Badge, Avatar, Paper } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loggedInUser } from '../redux/actions/auth';
import NavBar from '../components/navBar';
import SideBar from '../components/sidebar';
import MobLink from '../components/mobLinks';
import accommodationIcon from '../assets/accommodationIcon.svg';
import chatIcon from '../assets/chatIcon.svg';
import notificationIcon from '../assets/notificationIcon.svg';
import tripIcon from '../assets/tripIcon.svg';
import logo from '../assets/Logo.svg';

const DashboardPreview = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.loggedInUser);
  const roleId = JSON.parse(localStorage.getItem('userCredentials'));
  const redirect = useNavigate();
  if (roleId === null) {
    redirect('/login');
  }
  useEffect(() => {
    dispatch(loggedInUser());
  }, []);
  console.log(roleId.profile_picture, '=====');

  const pages = [
    `${roleId?.first_name}`,
    <Badge badgeContent="12" color="error" badge sx={{ color: '#FFC800' }}>
      <NotificationsIcon />
    </Badge>,
    data.status === 200 ? (
      <Avatar src={data.data?.user.profile_picture} alt="prifle image" />
    ) : (
      <Avatar src={roleId.profile_picture} salt="prifle image" />
    ),
  ];
  const sideBarLinks = [
    {
      to: '/dashboard/trips',
      link: 'Trips',
      icon: tripIcon,
    },
    {
      to: '/dashboard/accommodations',
      link: 'Accommodation',
      icon: accommodationIcon,
    },

    {
      to: '/dashobard/notifications',
      link: 'Notifications',
      icon: notificationIcon,
    },
    {
      to: '/dashboard/chats',
      link: 'Chats',
      icon: chatIcon,
    },
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <SideBar sideBarLinks={sideBarLinks} />
      <Paper elevation={0} sx={{ width: { xs: '100%', md: '100%' } }}>
        <NavBar pages={pages} logo={logo} requester />
        <Paper elevation={0} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MobLink sideBarLinks={sideBarLinks} />
        </Paper>
        <Outlet />
      </Paper>
    </Box>
  );
};;
export default DashboardPreview;
