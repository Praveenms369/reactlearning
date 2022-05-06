import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import React from 'react';
import Registration from './pages/Auth/registration';
import Singin from './pages/Auth/singin';
// import Dashboard from './pages/Dashboard';

function CustomRouter() {
  return (
    <Router>
      <Routes> 
        <Route exact path='/' element={<Registration></Registration>} />
        <Route exact path='/sigin' element={<Singin></Singin>} /> 
      </Routes>
    </Router>
  );
}

export default CustomRouter;
