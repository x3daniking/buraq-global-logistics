// src/components/Navbar.js
import React, { useState } from "react";
import { Header, Logo, Menu, MenuButton, MenuItem, Nav, DropdownMenu, DropdownItem, MenuIcon } from "./NavbarStyles";
import logo from "../../assets/images/logo.png";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdownToggle = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
  
	const toggleMenu = () => {
	  setMenuOpen(!menuOpen);
	};

	return (
		<Header>
			<Nav>
				<Logo>
					<img
						src={logo}
						alt="logo"
					/>
				</Logo>
				<MenuIcon onClick={toggleMenu}>
					<FaBars size={24} />
				</MenuIcon>
				<Menu isOpen={menuOpen}>
					<MenuItem to="/">Home</MenuItem>
					<MenuItem  as="div"
						onMouseEnter={handleDropdownToggle}
						onMouseLeave={handleDropdownToggle}
					>
						<div>Services </div>
						{isDropdownOpen && (
							<DropdownMenu>
								<DropdownItem to="/services">Trucking Services</DropdownItem>
								<DropdownItem to="/maintainance-services">Maintenance & Body Services</DropdownItem>
							</DropdownMenu>
						)}
					</MenuItem>
					<MenuItem to="/about-us">About us</MenuItem>
					<MenuItem to="/contact">Contact us</MenuItem>
					<MenuItem to="/blogs">Blogs</MenuItem>
					<MenuButton to="/drive-with-us">Drive With Us</MenuButton>
				</Menu>
			</Nav>
		</Header>
	);
};

export default Navbar;
