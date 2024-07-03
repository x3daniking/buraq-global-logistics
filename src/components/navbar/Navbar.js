// src/components/Navbar.js
import React from "react";
import { Header, Logo, Menu, MenuButton, MenuItem, Nav } from "./NavbarStyles";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
	return (
		<Header>
			<Nav>
				<Logo>
					<img
						src={logo}
						alt="logo"
					/>
				</Logo>
				<Menu>
					<MenuItem to="/">Home</MenuItem>
					<MenuItem to="/services">Services</MenuItem>
					<MenuItem to="/about-us">About us</MenuItem>
					<MenuItem to="/contact">Contact us</MenuItem>
					<MenuItem to="/blogs">Blogs</MenuItem>
					<MenuButton to='/drive-with-us'>Drive With Us</MenuButton>
				</Menu>
			</Nav>
		</Header>
	);
};

export default Navbar;
