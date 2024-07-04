import styled from "styled-components";

export const BlogContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
	padding: 150px 20px 100px 20px;
	width: 100%;
`;

export const BlogContent = styled.div`
	box-shadow: rgba(0, 0, 0, 0.65) 3px 3px 9px 0px;
	border-radius: 20px;
	padding: 40px;
	width: 100%;
	max-width: 1400px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	h2 {
		color: #000;
		font-size: 40px;
		font-weight: 500;
		line-height: 50px;
	}

	p {
		color: #000;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
	}

	img {
		opacity: 1;
		transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
			skew(0deg, 0deg);
		transform-style: preserve-3d;
		width: max-content;
		display: inline-block;
		filter: hue-rotate(280deg);
		height: 600px;
		width: 100%;
		align-self: center;
		border-radius: 8px;
	}
`;

export const BlogFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

export const CombinedFields = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

export const FormField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	position: relative;

	label {
		font-size: 16px;
		font-weight: 600;
		color: #000000;
	}
	input {
		color: #000000;
		font-size: 16px;
		border: 1px solid #69727d;
		padding: 10px 15px;
		border-radius: 3px;
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
`;

export const FormError = styled.p`
	position: absolute;
	bottom: -22px;
	color: red;
`;
