import React from "react";
import { OurBlogsCard, OurBlogsCards, OurBlogsContainer } from "./OurBlogsStyles";
import { CardsData } from "./OurBlogsCardsData";
import { BlogLink } from "./OurBlogsStyles";

const OurBlogs = () => {
	return (
		<OurBlogsContainer>
			<h2>Tips & Tricks</h2>
			<OurBlogsCards>
				{CardsData.map((cardData) => (
					<OurBlogsCard key={cardData.id}>
						<img src={cardData.image} alt='service-img' />
						<h3>{cardData.title}</h3>
						<p>{cardData.heading}</p>
						<BlogLink to={`${cardData.blogLink}`}>Read More</BlogLink>
					</OurBlogsCard>
				))}
			</OurBlogsCards>
		</OurBlogsContainer>
	);
};

export default OurBlogs;
