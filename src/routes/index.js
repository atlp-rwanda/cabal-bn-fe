import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../view/index';
import Login from '../view/login';
import Dashboard from '../view/dashboard';
import Signup from '../view/signup';
import EmailVerification from '../view/verifyEmail';
import GoogleLogin from '../view/google_login';

const AllRoutes = (props) => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/social/login" element={<GoogleLogin />} />
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/verify" element={<EmailVerification {...props} />} />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
