// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TitleUpdater from './TitleUpdater';
import ServicesPage from './pages/services/Services';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
          <TitleUpdater />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/about-us" element={<AboutUs />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
