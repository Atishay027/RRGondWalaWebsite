// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ProductPage from './components/ProductPage';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <ProductPage />
      <AboutUs />
      <ContactUs />
      <Footer/>
    </div>
  );
}

export default App;
