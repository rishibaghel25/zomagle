import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Home/HomePage'; // Import the HomePage component
import './index.css'; 
import { auth } from './services/firebase'; // Adjust based on your actual directory structure

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} /> {/* Add HomePage route */}
      </Routes>
    </Router>
  );
}

export default App;
