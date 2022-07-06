import { BrowserRouter , Route, Link, Routes } from 'react-router-dom';

import React, { Component } from 'react';
import Registration from './pages/Auth/registration';
import Singin from './pages/Auth/singin';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Training from './pages/Training';
import Workshop from './pages/Workshop';
// import Dashboard from './pages/Dashboard';

function CustomRouter() {
  return (
    <BrowserRouter>
      <Routes> 
      <Route exact path='/' element={<Home></Home>} />
        <Route exact path='/signup' element={<Registration></Registration>} />
        <Route exact path='/sigin' element={<Singin></Singin>} /> 
        <Route exact path='/dashboard' element={<Dashboard></Dashboard>} /> 
        <Route exact path='/training' element={<Training></Training>} /> 
        <Route exact path='/public-workshops' element={<Workshop></Workshop>} /> 
      </Routes>
    </BrowserRouter>
  );
} 

export default CustomRouter;
