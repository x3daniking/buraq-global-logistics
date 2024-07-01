import styled from "styled-components";

export const HeroContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	position: relative;
`;

export const HeroSection = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
`;

export const HeroSectionBackground = styled.div`
	height: 100%;
	background-image: url(${(props) => props.imageUrl});
	background-size: cover;
	background-position: center;
`;

export const HeroOverly = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	z-index: 1;
`;

export const HeroText = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 1100px;
	padding-top: 100px;

	h2 {
		color: #ffffff;
		font-size: 64px;
		font-weight: 700;
		line-height: 80px;
		max-width: 660px;
	}
	p {
		color: #ffffff;
		font-size: 18px;
		line-height: 35px;
		max-width: 700px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;
export const PrimaryButton = styled.button`
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
`;

export const SecondaryButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  color: #977d44;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid #977d44;
  background: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background: #fff;
  }
`;

export const ServicesFilterBarContainer = styled.div`
	display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
  background: #977d44;
`;

export const ServicesFilterBarMenu = styled.div`
	display: flex;
	align-items: center;

  button{
    background: none;
    outline: none;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    padding: 15px 20px;
		transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

		&:hover {
      background: rgba(0, 0, 0, 0.1);
		}
  }
`;
