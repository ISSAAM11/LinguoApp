import React, { useState } from 'react';
import './App.css';
import UserInterface from './components/UserInterface/UserInterface';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <React.Fragment>
        
        <Route path="/*" element={<LoginPage />} />
        <Route path="/login/*" element={<LoginPage />} />
        <Route path="/home/*" element={<UserInterface />} />

        </React.Fragment>
      </Routes> 
    </BrowserRouter>

    </>
  );
}

export default App;
