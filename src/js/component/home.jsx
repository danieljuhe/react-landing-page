import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";
import JumBotRom from "./jumbotrom";
import NavBar from "./navbar";

//create your first component
const Home = () => {
	return (
		<>
		<NavBar/>
		<div className="container">
			<div className="row">
				<div className="col">
					<JumBotRom/>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Card/>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
