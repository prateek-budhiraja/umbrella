import React from "react";
import axios from "axios";

function Search() {
	const handleSearch = async (city) => {
		const geoData = await axios.get(
			`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
		);
	};

	return <div>Search</div>;
}

export default Search;
