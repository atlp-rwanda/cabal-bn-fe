/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LandingPage from '../view/index';
import Login from '../view/login';
import Dashboard from '../view/dashboard';
import Signup from '../view/signup';
import EmailVerification from '../view/verifyEmail';
import GoogleLogin from '../view/google_login';
import Forgot from '../view/Forgot';
import ResetPassword from '../view/ResetPassword';
import DashboardPreview from '../layouts/requester';
import RequesterContent from '../view/requesterContent';
import Profile from "../view/profile"
import UserSettingsModal from '../components/user_role';

const theme = createTheme({
  pallete: {
    primary: {
      main: '#1A2D6D',
      text: '#fff',
    },
    secondary: {
      main: '#0B2C5f',
      text: '#fff',
    },
    text: {
      primary: '#0000',
      secondary: '#fff',
    },
  },
  typography: {
    fontFamily: 'Josefin Sans, sans-serif',
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    margin: 0,
    '@media (max-width:600px)': {
      fontSize: 12,
    },
  },
});

const AllRoutes = (props) => (
  <ThemeProvider theme={theme}>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/social/login" element={<GoogleLogin />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/verify"
          element={<EmailVerification {...props} />}
        />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route
          exact
          path="/resetPassword"
          element={<ResetPassword {...props} />}
        />
        <Route exact path="/dashboard/" element={<DashboardPreview />}>
          <Route exact path="" element={<RequesterContent />} />
          <Route exact path="trips" element={<RequesterContent />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="roles" element={<UserSettingsModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default AllRoutes;
