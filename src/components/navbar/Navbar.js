// src/components/Navbar.js
import React, { useState } from "react";
import { Header, Logo, Menu, MenuButton, MenuItem, Nav, DropdownMenu, DropdownItem, MenuIcon } from "./NavbarStyles";
import logo from "../../assets/images/logo.png";
import { FaBars } from "react-icons/fa";

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
				<Menu isOpen={!menuOpen}>
					<MenuItem
						onClick={toggleMenu}
						to="/">
						Home
					</MenuItem>
					<MenuItem
						as="div"
						onMouseEnter={handleDropdownToggle}
						onMouseLeave={handleDropdownToggle}>
						<div>Services </div>
						{isDropdownOpen && (
							<DropdownMenu>
								<DropdownItem
									onClick={toggleMenu}
									to="/services">
									Trucking Services
								</DropdownItem>
								{/* <DropdownItem onClick={toggleMenu} to="/maintainance-services">Maintenance & Body Services</DropdownItem> */}
							</DropdownMenu>
						)}
					</MenuItem>
					<MenuItem
						onClick={toggleMenu}
						to="/about-us">
						About us
					</MenuItem>
					<MenuItem
						onClick={toggleMenu}
						to="/contact">
						Contact us
					</MenuItem>
					<MenuItem
						onClick={toggleMenu}
						to="/blogs">
						Blogs
					</MenuItem>
					<MenuButton
						onClick={toggleMenu}
						to="/drive-with-us">
						Drive With Us
					</MenuButton>
				</Menu>
			</Nav>
		</Header>
	);
};

export default Navbar;
