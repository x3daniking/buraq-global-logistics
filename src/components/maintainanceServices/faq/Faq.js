// src/components/FAQ.js
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const FAQSectionContainer = styled.div`
	width: 100%;
	padding: 50px 20px 100px 20px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
			
@media (max-width: 768px) {
	padding: 0 20px 30px 20px;
}
`;

const FAQSection = styled.div`
	max-width: 1240px;
`;

const FAQTitle = styled.h2`
	text-align: center;
	margin-bottom: 20px;
	font-size: 42px;
	font-weight: 700;
	line-height: 60px;
	
@media (max-width: 768px) {
	font-size: 32px;
	line-height: 50px;
}
`;

const FAQQuetions = styled.li`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 20px;
		
@media (max-width: 990px) {
	grid-template-columns: 1fr;
	max-width: 700px;
}
`;

const FAQItem = styled.li`
	list-style: none;
	margin-bottom: 10px;
	padding-bottom: 10px;
`;

const QuestionButton = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	background: none;
	border: none;
	outline: none;
	font-size: 16px;
	line-height: 1.4em;
	color: #333;
	font-weight: 600;
	padding: 15px;
	cursor: pointer;
	text-align: left;
	border: 1px solid rgba(0, 0, 0, 0.02);

	&:hover {
		background: #977d44;
		color: #fff;
	}
`;

const ButtonLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`;

const Answer = styled.p`
	border: 1px solid #977d44;
	padding: 15px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-size: 1rem;
	line-height: 1.7;
		
@media (max-width: 768px) {
	font-size: 14px;
}
`;

const PlusMinusIcon = styled.span`
	font-size: 25px;
	font-weight: 700;
`;

const ArrowIcon = styled.div`
	font-size: 16px;
	font-weight: bold;
`;

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqData = [
		{
			question: "What is the average response time for your emergency roadside assistance services?",
			answer: "Our average response time for emergency roadside assistance is less than an hour, ensuring that we reach your location swiftly and efficiently.",
		},
		{
			question: "Are there any specific requirements for accessing your towing services?",
			answer: "Generally, we require the owner’s authorization and proof of ownership to ensure the security of the vehicle. Additionally, if you have specific requests or instructions, please inform our team when requesting our towing services.",
		},
		{
			question: "How is the pricing determined for your services?",
			answer: "Our pricing is based on several factors, including the type of service required, distance traveled, and any additional resources needed. We strive to provide competitive rates while maintaining the highest level of quality and professionalism.",
		},
		{
			question: "Do you provide services on weekends and holidays?",
			answer: "Yes, our services are available 24/7, including weekends and holidays. We understand that roadside emergencies can occur at any time, and we are committed to being there for you whenever you need assistance.",
		},
		{
			question: "What payment methods do you accept?",
			answer: "We accept various payment methods, including credit cards, debit cards, and cash. Our goal is to make the payment process convenient for our customers, ensuring a seamless experience.",
		},
		{
			question: "Do you offer any guarantees on your services?",
			answer: "Yes, customer satisfaction is our top priority. We stand behind the quality of our services and strive to exceed your expectations. If you encounter any issues, please contact our customer support, and we will work diligently to resolve them to your satisfaction.",
		},
	];

	const handleClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<FAQSectionContainer>
			<FAQSection>
				<FAQTitle>Frequently Asked Questions</FAQTitle>
				<FAQQuetions>
					{faqData.map((item, index) => (
						<FAQItem key={index}>
							<QuestionButton onClick={() => handleClick(index)}>
								<ButtonLeft>
									<PlusMinusIcon>{activeIndex === index ? "-" : "+"}</PlusMinusIcon>
									{item.question}
								</ButtonLeft>
								<ArrowIcon>
									{activeIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
								</ArrowIcon>
							</QuestionButton>
							{activeIndex === index && <Answer>{item.answer}</Answer>}
						</FAQItem>
					))}
				</FAQQuetions>
			</FAQSection>
		</FAQSectionContainer>
	);
};

export default FAQ;
