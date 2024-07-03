import { Link } from "react-router-dom";
import styled from "styled-components";

export const OurBlogsContainer = styled.div`
	padding: 100px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	width: 100%;
	max-width: 1200px;
	align-self: center;

	h2 {
		color: #000000;
		font-size: 42px;
		font-weight: 600;
		max-width: 1120px;
		text-align: center;
	}
`;

export const OurBlogsCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 30px;
	row-gap: 30px;
	margin: 30px 0;
	max-width: 1400px;
`;

export const OurBlogsCard = styled.div`
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
	align-items: flex-start;
	padding: 20px;

	h3 {
		color: #000;
		font-size: 1.2rem;
		font-weight: 700;
		line-height: 31.6px;
		text-align: left;
	}

	p {
		color: #000000;
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
		text-align: left;
		height: 70px;
	}

	img {
		height: 220px;
		align-self: flex-start;
	opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    border-radius: 8px;
    display: inline-block;
    box-shadow: 3px 3px 9px rgba(0, 0, 0, .65);
	}

	&:hover {
		transition: all 0.3s ease-in-out;
		border-right: 5px solid #000;
		border-bottom: 5px solid #000;
		box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	}
`;

export const BlogLink = styled(Link)`
background: none;
		border: 1px solid #000;
		border-radius: 10px;
		font-size: 16px;
		font-weight: 600;
		padding: 10px 20px;
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
		text-decoration: none;
		color: #000;

		&:hover {
			background: #977d44;
		}
`;