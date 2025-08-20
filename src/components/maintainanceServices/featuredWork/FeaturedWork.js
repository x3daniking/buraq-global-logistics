import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FeaturedWorkContainer } from "./FeaturedWorkStyles";
import G1 from "../../../assets/images/gallery/G1.jpg";
import G2 from "../../../assets/images/gallery/G2.jpg";
import G3 from "../../../assets/images/gallery/G3.jpg";
import G4 from "../../../assets/images/gallery/G4.jpg";
import G5 from "../../../assets/images/gallery/G5.jpg";
import G6 from "../../../assets/images/gallery/G6.jpg";
import G7 from "../../../assets/images/gallery/G7.jpg";
import G8 from "../../../assets/images/gallery/G8.jpg";
import G9 from "../../../assets/images/gallery/G9.jpg";
import G10 from "../../../assets/images/gallery/G10.jpg";

const FeaturedWork = () => {
	const images = [
		{
			original: G1,
			thumbnail: G1,
		},
		{
			original: G2,
			thumbnail: G2,
		},
		{
			original: G3,
			thumbnail: G3,
		},
		{
			original: G4,
			thumbnail: G4,
		},
		{
			original: G5,
			thumbnail: G5,
		},
		{
			original: G6,
			thumbnail: G6,
		},
		{
			original: G7,
			thumbnail: G7,
		},
		{
			original: G8,
			thumbnail: G8,
		},
		{
			original: G9,
			thumbnail: G9,
		},
		{
			original: G10,
			thumbnail: G10,
		},
	];

	return (
		<FeaturedWorkContainer>
			<h2>Gallery</h2>
			<p>
				At Buraq Global Logistics, we deliver excellence in every mile. Explore our gallery to see our top-notch
				logistics services {/* and meticulous maintenance */} in action.
			</p>
			<ImageGallery items={images} />
		</FeaturedWorkContainer>
	);
};

export default FeaturedWork;
