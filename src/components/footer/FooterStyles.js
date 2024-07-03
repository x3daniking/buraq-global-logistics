import styled from "styled-components";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const FooterSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 100px 20px;
	background: #fff;
`;

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
	width: 100%;
	max-width: 1120px;
`;

export const FooterLeft = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 20px;

	p {
		color: #353535;
		font-size: 16px;
		font-weight: 500;
		max-width: 550px;
	}

	img {
		height: 100px;
		width: 150px;
	}
`;

export const FooterRight = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	h3 {
		text-align: center;
		color: #000000;
		font-size: 16px;
		font-weight: 600;
		line-height: 0.5em;
	}

	h2 {
		text-align: center;
		color: #000000;
		font-size: 18px;
		font-weight: 400;
		line-height: 0.1em;
		margin-top: 5px;
	}
`;

export const FooterIcons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 7px;
`;

export const FooterIcon = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #967b44;
  border-radius: 5px;
  padding: 5px;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Facebook = styled(FaFacebookF)`
	color: #fff;
	font-size: 12px;
`;

export const Linkedin = styled(FaLinkedinIn)`
	color: #fff;
	font-size: 12px;
`;

export const Instagram = styled(FaInstagram)`
	color: #fff;
	font-size: 12px;
`;

export const Twitter = styled(FaTwitter)`
	color: #fff;
	font-size: 12px;
`;

export const FooterMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;

	button {
		background: #977d44;
		padding: 12px 28px;
		border-radius: 8px;
		color: #000;
		font-size: 16px;
		font-weight: 600;
	}
`;

export const FooterMenuItem = styled(NavLink)`
	color: #000;
	text-decoration: none;
	font-size: 16px;
	line-height: 24px;
	font-weight: 600;

	/* &.active {
    color: #000;
} */
`;
