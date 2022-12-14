// import React, { useState } from 'react'
import './index.css'
import LandingPage from './components/pages/home/LandingPage';
import SignUp from './components/forms/SignUp';
import SignIn from './components/forms/SignIn';
import Account from './components/pages/Account';
import { Route, Routes } from "react-router-dom";
import DashBoard from './components/pages/home/DashBoard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sigin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/account' element={<Account />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  )
}

export default App;
