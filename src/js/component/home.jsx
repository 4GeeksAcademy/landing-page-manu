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
			<div className="col-8 mx-auto mt-5 flex-grow-1 d-flex flex-column align-items-center">
				<Jumbotron />
				<div className="d-flex justify-content-center flex-wrap">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</> 
	);
};

export default Home;
