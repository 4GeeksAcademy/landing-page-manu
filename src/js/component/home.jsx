import React from "react";

import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="col-8 vh-100 h-100  mx-auto justify-content-between align-items-center text-center ">
				<Jumbotron />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			
			<Footer />
		</> 
	);
};

export default Home;
