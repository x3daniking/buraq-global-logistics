import styled from "styled-components";

export const MaintainanceOurServicesContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 100px 20px;

	@media (max-width: 768px) {
		padding: 50px 20px;
	}
`;

export const OurServicesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	max-width: 1200px;

	h2 {
		color: #000000;
		font-size: 42px;
		font-weight: 600;
		text-align: center;
	}

	p {
		color: #000000;
		font-size: 18px;
		line-height: 26px;
		font-weight: 500;
		max-width: 880px;
		text-align: center;
	}

	@media (max-width: 768px) {
		h2 {
			font-size: 32px;
		}

		p {
			font-size: 14px;
		}
	}
`;

export const OurServicesCards = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	justify-items: center;
	column-gap: 30px;
	row-gap: 30px;
	margin-top: 30px;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const OurServicesCard = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 10px;
	background-color: #fff;
	border: 5px solid transparent;
	border-radius: 8px;
	padding: 20px;

	h3 {
		color: #000;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 41.6px;
	}

	p {
		color: #000000;
		font-size: 16px;
		line-height: 24px;
		font-weight: 500;
		text-align: left;
	}

	img {
		height: 220px;
		align-self: flex-start;
		filter: hue-rotate(280deg);
	}

	&:hover {
		transition: all 0.3s ease-in-out;
		border-right: 5px solid #000;
		border-bottom: 5px solid #000;
		box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	}

	@media (max-width: 768px) {
		h3 {
			font-size: 22px;
			line-height: 34px;
		}

		p {
			font-size: 14px;
		}
	}
`;
