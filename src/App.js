import "./App.css";
import { useState } from "react";
// import axios from "axios";
import Waiting from "./component/Waiting";
import Weather from "./component/Weather";

function App() {
	const [weather, setWeather] = useState({
		coord: { lon: 77.2206, lat: 28.6449 },
		weather: [{ id: 701, main: "Mist", description: "mist", icon: "50n" }],
		base: "stations",
		main: {
			temp: 22.07,
			feels_like: 22.79,
			temp_min: 22.07,
			temp_max: 22.07,
			pressure: 1013,
			humidity: 94,
		},
		visibility: 2500,
		wind: { speed: 2.57, deg: 310 },
		clouds: { all: 0 },
		dt: 1677001176,
		sys: {
			type: 1,
			id: 9165,
			country: "IN",
			sunrise: 1676942694,
			sunset: 1676983503,
		},
		timezone: 19800,
		id: 1273840,
		name: "Connaught Place",
		cod: 200,
	});

	// const getWeather = async (lat, lon) => {
	// 	const resultWeather = await axios.get(
	// 		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`
	// 	);
	// 	setWeather(resultWeather);
	// };

	// useEffect(() => {
	// 	let lat;
	// 	let lon;
	// 	navigator.geolocation.getCurrentPosition(
	// 		async function (location) {
	// 			lat = location.coords.latitude;
	// 			lon = location.coords.longitude;
	// 			// getWeather(lat, lon);
	// 		},
	// 		function (err) {
	// 			// getWeather(28.6448, 77.216721);
	// 		}
	// 	);
	// }, []);
	return !weather ? <Waiting /> : <Weather weather={weather} />;
}

export default App;
