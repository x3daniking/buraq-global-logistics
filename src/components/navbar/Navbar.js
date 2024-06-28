// src/components/Navbar.js
import React from 'react';
import { Header, Logo, Menu, MenuItem, Nav } from './NavbarStyles';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Logo>
          <img src={logo} alt='logo' />
        </Logo>
        <Menu>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/services">Services</MenuItem>
          <MenuItem to="/about-us">About us</MenuItem>
          <MenuItem to="/contact">Contact us</MenuItem>
          <MenuItem to="/blogs">Blogs</MenuItem>
          <button>Drive With Us</button>
        </Menu>
      </Nav>
    </Header>
  );
};

export default Navbar;
