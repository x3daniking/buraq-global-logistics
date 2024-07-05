import styled from 'styled-components';

export const ContactUsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 100px 20px;
	width: 100%;
    
@media (max-width: 768px) {
    padding: 50px 20px;
}
`;

export const ContactUsContent = styled.div`
	box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	border-radius: 20px;
	padding: 40px;
	width: 100%;
	max-width: 1180px;
    background: #fff;
display: flex;
justify-content: space-between;
gap: 50px;
		
@media (max-width: 990px) {
	flex-direction: column;
}
		
@media (max-width: 768px) {
	padding: 30px 20px;
    justify-content: center;
    align-items: center;
}
`;

export const ContactUsContentLeft = styled.div`
display: flex;
flex-direction: column;
gap: 15px;

h1{
    color: #000000;
    font-size: 35px;
    font-weight: 600;
}

h2{
    color: #000000;
    font-size: 30px;
    font-weight: 400;
}

p{
    color: #000000;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
}

h3{
    color: #000000;
    font-size: 26px;
    font-weight: 500;
    margin: 15px 0 0 0;
}
		
@media (max-width: 768px) {
	
h1{
    font-size: 32px;
    text-align: center;
}

h2{
    font-size: 24px;
    text-align: center;
}

p{
    font-size: 14px;
    text-align: center;
}

h3{
    font-size: 24px;
    text-align: center;
}
}
`;

export const ContactUsIcons = styled.div`
display: flex;
align-items: center;
gap: 10px;

p{
    color: #54595F;
    font-size: 17px;
    font-weight: 500;
}

@media (max-width: 768px) {
    justify-content: center;
    p{
        font-size: 14px;
    }
    img{
        width: 20px;
        height: 25px;
    }
}
`;

export const ContactUsFormContainer = styled.form`
display: flex;
flex-direction: column;
gap: 25px;
width: 100%;
`;

export const CombinedFields = styled.div`
display: flex;
align-items: center;
gap: 20px;
width: 100%;
		
@media (max-width: 768px) {
	flex-direction: column;
}
`;

export const FormField = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
position: relative;
width: 100%;

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
  		
@media (max-width: 768px) {
	font-size: 16px;
}
`;

export const FormError = styled.p`
position: absolute;
bottom: -22px;
color: red;
`;