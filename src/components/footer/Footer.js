import React from "react";
import {
	Facebook,
	FooterContainer,
	FooterIcon,
	FooterIcons,
	FooterLeft,
	FooterMenu,
	FooterMenuItem,
	FooterRight,
	FooterSection,
	Instagram,
	Linkedin,
	Twitter,
} from "./FooterStyles";
import logo from "../../assets/images/logo.png";

const Footer = () => {
	return (
		<FooterSection>
			<FooterContainer>
				<FooterLeft>
					<img
						src={logo}
						alt="logo"
					/>
					<p>
						We at Buraq Services are dedicated to providing reliable and efficient assistance to truck
						drivers and fleet operators in need of roadside support
					</p>
					<FooterMenu>
						<FooterMenuItem to="/">Home</FooterMenuItem>
						<FooterMenuItem to="/services">Services</FooterMenuItem>
						<FooterMenuItem to="/about-us">About us</FooterMenuItem>
						<FooterMenuItem to="/contact">Contact us</FooterMenuItem>
						<FooterMenuItem to="/blogs">Blogs</FooterMenuItem>
					</FooterMenu>
				</FooterLeft>
				<FooterRight>
					<FooterIcons>
						<FooterIcon>
							<Twitter />
						</FooterIcon>
						<FooterIcon>
							<Linkedin />
						</FooterIcon>
						<FooterIcon>
							<Instagram />
						</FooterIcon>
					</FooterIcons>
					{/* <h3>onestoppetroleum@gmail.com</h3> */}
					<h2>(631) 565-2990</h2>
					<h2>(516) 244-2780</h2>
				</FooterRight>
			</FooterContainer>
		</FooterSection>
	);
};

export default Footer;
