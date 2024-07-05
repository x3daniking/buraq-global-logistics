import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactUsSectionContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	padding: 100px 20px;
	width: 100%;

@media (max-width: 768px) {
	padding: 50px 20px;
}
`;

export const ContactUsSectionContent = styled.div`
	/* background: #977D44; */
	box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	border-radius: 20px;
	padding: 40px;
	width: 100%;
	max-width: 1400px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	/* border-radius: 10px;
box-shadow: 4px 4px 1px 1px #000;
padding: 30px; */

	h1 {
		color: #977d44;
		font-size: 3rem;
		font-weight: 700;
		line-height: 1.2;
	}
	
	h3 {
		color: #977d44;
		font-size: 1.6rem;
		font-weight: 700;
		line-height: 1.2;
	}

	p {
		color: #000;
		font-size: 18px;
		line-height: 35px;
		font-weight: 500;
	}
		
	@media (max-width: 768px) {
	justify-content: center;
	align-items: center;
	padding: 20px;
	
	h1 {
		font-size: 32px;
		text-align: center;
	}

	h3 {
		font-size: 30px;
		text-align: center;
	}

	p {
		font-size: 14px;
		line-height: 26px;
		text-align: center;
	}
}
`;

export const ContactUsButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	
@media (max-width: 768px) {
	gap: 10px;
}
`;

export const ContactUsButton = styled(Link)`
text-decoration: none;
color: #fff;
font-size: 18px;
font-weight: 400;
margin: 15px 0 0 0;
background: #977d44;
border-radius: 10px;
height: 50px;
width: 200px;
transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
display: flex;
justify-content: center;
align-items: center;

&:hover {
	background: #000;
}

@media (max-width: 768px) {
	font-size: 13px;
	width: 130px;
	height: 40px;
}
`;