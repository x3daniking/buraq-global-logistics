import { Link } from "react-router-dom";
import styled from "styled-components";

export const AboutUsSectionTopContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	padding: 100px 20px;
	width: 100%;
`;

export const AboutUsSectionTopContent = styled.div`
	/* background: #977D44; */
	box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	border-radius: 20px;
	padding: 40px 50px;
	width: 100%;
	max-width: 1180px;
	display: flex;
    justify-content: center;
    align-items: center;
	flex-direction: column;
	gap: 15px;
	
	h3 {
		color: #977d44;
		font-size: 1.6rem;
		font-weight: 700;
		line-height: 1.2;
        text-align: center;
	}

	p {
		color: #000;
		font-size: 18px;
		line-height: 35px;
		font-weight: 500;
        text-align: center;
	}
`;

export const AboutUsSectionBottomContainer = styled.div`
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
`;

export const AboutUsSectionBottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 50px;
  max-width: 1180px;
`;

export const AboutUsSectionBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2{
    color: #977d44;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.2;
  }

  p{
    color: #000;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
    max-width: 550px;
  }

  button{
		color: #fff;
		font-size: 18px;
		font-weight: 400;
		margin: 15px 0 0 0;
		background: #977d44;
		border-radius: 10px;
		height: 50px;
		width: 170px;
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

		&:hover {
			background: #000;
		}
  }
`;

export const GetInTouchButton = styled(Link)`
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
`;


export const AboutUsSectionBottomRight = styled.div`
max-width: 500px;
img{
opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    border-radius: 30px;
    display: inline-block;
    box-shadow: 3px 3px 9px rgba(0, 0, 0, .65);
}
`;