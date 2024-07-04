// src/components/Navbar.js
import React, { useState } from "react";
import { Header, Logo, Menu, MenuButton, MenuItem, Nav, DropdownMenu, DropdownItem } from "./NavbarStyles";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleDropdownToggle = () => {
		setIsDropdownOpen(!isDropdownOpen);
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
				<Menu>
					<MenuItem to="/">Home</MenuItem>
					<div
						onMouseEnter={handleDropdownToggle}
						onMouseLeave={handleDropdownToggle}
					>
						<MenuItem as="div">Services </MenuItem>
						{isDropdownOpen && (
							<DropdownMenu>
								<DropdownItem to="/services">Trucking Services</DropdownItem>
								<DropdownItem to="/maintainance-services">Maintenance & Body Services</DropdownItem>
							</DropdownMenu>
						)}
					</div>
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
