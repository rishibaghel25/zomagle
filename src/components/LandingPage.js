import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="header"
      >
        <h1>Welcome to Zomagle</h1>
        <p>Connect globally through our multi-layered chatrooms.</p>
        <Link to="/register" className="btn">Get Started</Link>
      </motion.header>
    </div>
  );
};

export default LandingPage;
