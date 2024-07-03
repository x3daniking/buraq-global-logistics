// TitleUpdater.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
	const location = useLocation();

	useEffect(() => {
		switch (location.pathname) {
			case "/":
				document.title = "Buraq Global Logistics";
				break;
			case "/services":
				document.title = "Services - Buraq Global Logistics";
				break;
			case "/about-us":
				document.title = "About - Buraq Global Logistics";
				break;
			case "/contact":
				document.title = "Contact - Buraq Global Logistics";
				break;
			default:
				document.title = "Buraq Global Logistics";
		}
	}, [location]);

	return null;
};

export default TitleUpdater;
