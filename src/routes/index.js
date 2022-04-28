import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from '../view/index';
import Login from '../view/login';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
