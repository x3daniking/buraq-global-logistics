// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import TitleUpdater from './TitleUpdater';
import ServicesPage from './pages/services/Services';
import Footer from './components/footer/Footer';
import ContactUsPage from './pages/contacUsPage/ContactUsPage';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage';
import BlogsPage from './pages/blogsPage/BlogsPage';
import BlogOne from './components/blogs/BlogOne';
import BlogTwo from './components/blogs/BlogTwo';
import BlogThree from './components/blogs/BlogThree';

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
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/effective-solutions-for-supply-chain-management/" element={<BlogOne />} />
            <Route path="/essential-guidelines-for-trucking-and-towing-professionals/" element={<BlogTwo />} />
            <Route path="/top-tips-for-efficient-trucking-operations/" element={<BlogThree />} />
          </Routes>
          <Footer />
      </Router>
    </>
  );
}

export default App;
