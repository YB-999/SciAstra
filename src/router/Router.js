import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './../Pages/Home';
import Team from './../Pages/Team';
import Mentor from './../Pages/Mentor';


const Router = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/mentors" element={<Mentor />} />  
        
      </Routes>
    );
  };
  
  export default Router;