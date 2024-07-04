import { Link } from "react-router-dom";
import styled from "styled-components";

export const OurServicesContainer = styled.div`
	padding: 100px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;
	width: 100%;
	max-width: 1200px;
	align-self: center;

	h2 {
		color: #000000;
		font-size: 42px;
		font-weight: 600;
		max-width: 1120px;
	}

	p {
		color: #000000;
		font-size: 18px;
		line-height: 26px;
		font-weight: 500;
		max-width: 1120px;
		text-align: justify;
	}
`;

export const OurServicesCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 30px;
	row-gap: 30px;
	margin: 30px 0;
	max-width: 1120px;
`;

export const OurServicesCard = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	text-align: center;
	background-color: #fff;
	border: 5px solid transparent;
	border-radius: 8px;
	flex-direction: column;
	align-items: center;
	padding: 50px 20px;

	h3 {
		color: #000;
		font-size: 2rem;
		font-weight: 700;
		line-height: 41.6px;
	}

	p {
		color: #000000;
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
		text-align: center;
		height: 150px;
	}

	img {
		height: 220px;
		align-self: flex-start;
	}

	button {
		background: none;
		border: 1px solid #000;
		border-radius: 10px;
		font-size: 16px;
		font-weight: 600;
		padding: 10px 20px;

		&:hover {
			transition: all 0.1s ease;
			background-color: #967b44;
			border: 1px solid #fff;
			color: #fff;
		}
	}

	&:hover {
		cursor: pointer;
		transition: all 0.1s ease-in-out;
		border-right: 5px solid #000;
		border-bottom: 5px solid #000;
		box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	}
`;

export const ServicesCardButton = styled(Link)`
text-decoration: none;
background: none;
border: 1px solid #000;
border-radius: 10px;
font-size: 16px;
font-weight: 600;
padding: 10px 20px;
transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
color: #000;

&:hover {
	background: #977d44;
}
`;