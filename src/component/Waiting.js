import React from "react";
import "./waiting.css";

function Waiting() {
	return (
		<div className="waitingcontainer">
			<img src="/images/horizon.svg" alt="horizon image" />
			<h2>Please allow location access to get personalized weather data!</h2>
		</div>
	);
}

export default Waiting;
