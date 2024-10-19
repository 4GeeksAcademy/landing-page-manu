import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
		</>
	);
};

export default Home;
