import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Waiting from "./component/Waiting";
import Weather from "./component/Weather";

function App() {
	const [weather, setWeather] = useState(null);

	const getWeather = async (lat, lon) => {
		const resultWeather = await axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`
		);
		setWeather(resultWeather?.data);
	};

	useEffect(() => {
		let lat;
		let lon;
		navigator.geolocation.getCurrentPosition(
			async function (location) {
				lat = location.coords.latitude;
				lon = location.coords.longitude;
				getWeather(lat, lon);
			},
			function (err) {
				getWeather(28.6448, 77.216721);
			}
		);
	}, []);
	return !weather ? (
		<Waiting />
	) : (
		<Weather getWeather={getWeather} weather={weather} />
	);
}

export default App;
