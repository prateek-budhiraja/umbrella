import React, { useState } from "react";
import "./weather.css";
function Weather({ weather }) {
	let day;
	const [time, setTime] = useState("");
	const [city, setCity] = useState("");
	const handleCitySubmit = (e) => {
		e.preventDefault();
		console.log(city);
		setCity("");
	};

	setInterval(() => {
		day = new Date().getDay();
		switch (day) {
			case 0:
				day = "Monday";
				break;
			case 1:
				day = "Tuesday";
				break;
			case 2:
				day = "Wednesday";
				break;
			case 3:
				day = "Thrusday";
				break;
			case 4:
				day = "Friday";
				break;
			case 5:
				day = "Saturday";
				break;
			case 6:
				day = "Sunday";
				break;
		}
		setTime(day);
	}, 60000);

	return (
		<>
			<div className="topcontainer">
				<img src="/images/rain.jpg" alt="" />
				<form onSubmit={handleCitySubmit}>
					<input
						type="text"
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
					<button type="submit">Search</button>
				</form>
				<h1 id="place">{weather.name}</h1>
				<div>
					<h1 id="time">21:20</h1>
					<h2 id="date">Sunday, Feb 26, 2023</h2>
				</div>
			</div>
			<div className="bottomcontainer">
				<div className="left">
					<img
						id="weathericon"
						src={`/images/openweathermap/${weather.weather[0].icon}.svg`}
						alt=""
					/>
					<div>
						<div className="weatherinfo">
							<h1>{Math.floor(weather.main.temp)}</h1>
							<span> — </span>
							<h3>Temprature</h3>
						</div>
						<div className="weatherinfo">
							<h1>{Math.floor(weather.main.feels_like)}</h1>
							<span> — </span>
							<h3>Feels Like</h3>
						</div>
					</div>
				</div>
				<div className="right">
					<div>
						<img src="/images/humidity.svg" id="humidity" />
						<h3>Humidity</h3>
						<span> — </span>
						<h3>{weather.main.humidity}</h3>
					</div>
					<div>
						<img src="/images/wind.svg" id="humidity" />
						<h3>Wind</h3>
						<span> — </span>
						<h3>{weather.wind.speed}</h3>
					</div>
				</div>
			</div>
		</>
	);
}

export default Weather;
