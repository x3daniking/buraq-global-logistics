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
					<p>Delivering dependable logistics and freight solutions for every journey</p>
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
						<FooterIcon
							to="https://twitter.com/BuraqGlobal"
							target="_blank"
							rel="noopener noreferrer">
							<Twitter />
						</FooterIcon>
						<FooterIcon
							to="https://www.linkedin.com/company/buraq-global-logistics"
							target="_blank"
							rel="noopener noreferrer">
							<Linkedin />
						</FooterIcon>
						<FooterIcon
							to="https://www.instagram.com/buraqgloballogistics"
							target="_blank"
							rel="noopener noreferrer">
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
