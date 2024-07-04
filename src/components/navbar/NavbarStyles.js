import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	padding: 10px 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 999;

	@media screen and (max-width: 990px) {
		padding: 10px 20px;
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1200px;
`;

export const Logo = styled.div`
	img {
		height: 80px;
	}
`;

export const Menu = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	
	@media screen and (max-width: 990px) {
		gap: 20px;
	}
	
@media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top: ${(props) => (props.isOpen ? '-100vh' : '100px')};
    left: 0;
    right: 0;
    width: 100%;
    height: 320px;
    background-color: rgba(0,0,0,0.5);
	gap: 10px;
  }
`;

export const MenuItem = styled(NavLink)`
	color: #fff;
	text-decoration: none;
	font-size: 16px;
	line-height: 24px;
	font-weight: 500;

	&.active {
    color: #977d44;
}

@media (max-width: 768px) {
	width: 100%;
	padding: 10px 20px;

	&.active {
    background: #fff;
	border-radius: 8px;
}
&:hover {
    background: #fff;
	border-radius: 8px;
	color: #977d44;
}
}
`;

export const MenuButton = styled(Link)`
text-decoration: none;
background: #977d44;
padding: 12px 28px;
border-radius: 8px;
color: #000;
font-size: 16px;
font-weight: 600;
transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

&:hover {
	background: #fff;
}

@media (max-width: 768px) {
	width: 100%;
	padding: 10px 20px;

	&.active {
    background: #fff;
	border-radius: 8px;
}
&:hover {
    background: #fff;
	border-radius: 8px;
	color: #977d44;
}
}
`;

export const DropdownMenu = styled.div`
	position: absolute;
	background: #977d44;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	z-index: 1;
	border-radius: 8px;
`;

export const DropdownItem = styled(Link)`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	border-radius: 8px;

	&:hover {
		background-color: #fff;
	}
`;

export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;