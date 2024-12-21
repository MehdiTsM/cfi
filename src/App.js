// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './index.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import Products from './Products';
import Services from './Services';
import Contact from './Contact';
import Reference from './Reference';
import Loader from './Loader';

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 800); 

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      {loading ? <Loader /> : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reference" element={<Reference />} />
        </Routes>
      )}
    </div>
  );
}

// Wrap the App component with Router
export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
