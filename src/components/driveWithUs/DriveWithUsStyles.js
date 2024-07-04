import styled, { keyframes } from 'styled-components';

export const JobServicesContainer = styled.div`
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
		font-weight: 900;
		max-width: 1120px;
		text-align: center;
	}

	p {
		color: #000000;
		font-size: 18px;
		line-height: 26px;
		font-weight: 500;
		max-width: 1120px;
		text-align: center;
	}
`;

export const JobServicesCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 30px;
	row-gap: 30px;
	margin: 30px 0;
	max-width: 1120px;
`;

export const JobServicesCard = styled.div`
	display: flex;
	gap: 10px;
	background-color: #fff;
	border: 5px solid transparent;
	border-radius: 8px;
	flex-direction: column;
	align-items: flex-start;
	padding: 30px 20px;

	h3 {
		color: #000;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 36.6px;
	}
	
	p {
		color: #000000;
		font-size: 14px;
		line-height: 24px;
		font-weight: 500;
		text-align: left;
		list-style: circle;
	}

	li {
		color: #000000;
		font-size: 14px;
		line-height: 24px;
		font-weight: 500;
		text-align: left;
		list-style: circle;
	}

	&:hover {
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		border-right: 5px solid #000;
		border-bottom: 5px solid #000;
		box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	}
`;

export const DriverBenefitsContainer = styled.div`
	padding: 100px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	width: 100%;
	background: #fff;

	h2 {
		color: #000000;
		font-size: 42px;
		font-weight: 900;
		max-width: 1120px;
		text-align: center;
	}

	p {
		color: #000000;
		font-size: 18px;
		line-height: 26px;
		font-weight: 500;
		max-width: 550px;
		text-align: center;
	}
`;

export const DriverBenefitsCards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 50px;
	row-gap: 50px;
	margin-top: 50px;
	max-width: 1120px;
`;

export const DriverBenefitsCard = styled.div`
	display: flex;
	gap: 15px;
	background-color: #fff;
	border: 5px solid transparent;
	border-radius: 8px;
	flex-direction: column;
	align-items: flex-start;
	padding: 30px 20px;
	box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	position: relative;

	h3 {
		color: #000;
		font-size: 28px;
		font-weight: 900;
		line-height: 38.6px;
	}

	p {
		color: #000000;
		font-size: 14px;
		line-height: 24px;
		font-weight: 500;
		text-align: left;
	}

	&:hover {
		transition: all 0.3s ease-in-out;
		border-right: 5px solid #000;
		border-bottom: 5px solid #000;
	}
`;



const flipAnimation = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const DriverBenefitsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(250, 237, 89);
  padding: 10px;
  width: 80px;
  height: 80px;
  border-radius: 100px;
  position: absolute;
  top: -30px;
  right: -30px;

  img {
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    animation: ${flipAnimation} 1s infinite linear;
  }
`;


export const DriveWithUsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 100px 20px;
	width: 100%;
`;

export const DriveWithUsContent = styled.div`
	box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	border-radius: 20px;
	padding: 40px;
	width: 100%;
	max-width: 1180px;
    background: #fff;
display: flex;
justify-content: space-between;
align-items: center;
gap: 50px;
`;


export const DriveWithUsFormContainer = styled.form`
display: flex;
flex-direction: column;
gap: 25px;
width: 50%;
`;

export const CombinedFields = styled.div`
display: flex;
align-items: center;
gap: 20px;
width: 100%;
`;

export const FormField = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 100%;
position: relative;

label{
    font-size: 16px;
    font-weight: 600;
    color: #000000;
}
input{
    color: #000000;
    font-size: 16px;
    border: 1px solid #69727d;
    padding: 8px 10px;
    border-radius: 3px;
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


/* Standard property for compatibility */
input[type='number'] {
  appearance: textfield;
}
`;

export const Message = styled.textarea`
border: 1px solid #69727d;
padding: 15px;
height: 200px;
border-radius: 3px;
`;

export const FormButton = styled.button`
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
		
&:disabled{
    cursor: not-allowed;
    background: #000;
  }
`;

export const FormError = styled.p`
position: absolute;
bottom: -22px;
color: red;
`;



