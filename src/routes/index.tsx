import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Trips from 'pages/trips';
import ErrorPage from 'pages/404';
import TripDetails from 'pages/trips/tripDetails';

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/trips" element={<Trips />}></Route>
        <Route path="/trips/:id" element={<TripDetails />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default PageRoutes;
