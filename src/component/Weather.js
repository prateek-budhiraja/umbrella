import React, { useEffect, useState } from "react";
import "./weather.css";
function Weather({ weather }) {
	const [time, setTime] = useState("00:00");
	const [city, setCity] = useState("");
	const handleCitySubmit = (e) => {
		e.preventDefault();
		console.log(city);
		setCity("");
	};

	const getDate = () => {
		const todayDate = new Date();
		let month = "";
		switch (todayDate.getMonth()) {
			case 0:
				month = "January";
				break;
			case 1:
				month = "February";
				break;
			case 2:
				month = "March";
				break;
			case 3:
				month = "April";
				break;
			case 4:
				month = "May";
				break;
			case 5:
				month = "June";
				break;
			case 6:
				month = "July";
				break;
			case 7:
				month = "August";
				break;
			case 8:
				month = "September";
				break;
			case 9:
				month = "October";
				break;
			case 10:
				month = "November";
				break;
			case 11:
				month = "December";
				break;
			default:
				month = "NULL";
		}
		return `${month} ${todayDate.getDate()}, ${todayDate.getFullYear()}`;
	};

	function handleTime() {
		let todayDate = new Date();
		return todayDate.getHours() + ":" + todayDate.getMinutes();
	}

	setTimeout(() => {
		setTime(handleTime());
	}, 60000);

	useEffect(() => {
		setTime(handleTime());
	}, []);

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
					<h1 id="time">{time}</h1>
					<h2 id="date">{getDate()}</h2>
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
