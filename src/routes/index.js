import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../view/index';
import Login from '../view/login';
import Dashboard from '../view/dashboard';
import GoogleLogin from '../view/google_login';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/social/login" element={<GoogleLogin />} />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
