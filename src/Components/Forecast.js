import React, { useState, useEffect } from "react";
import axios from "axios";
import apikeys from "../API/apikey";
import ReactAnimatedWeather from "react-animated-weather";

function Forecast(props) {
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const [weather, setWeather] = useState({});

    const search = (city) => {
        axios.
            get(`
            ${apikeys.base}weather?q=${city !== "[object Object]" ? city : query}
            &units=metric&APPID=${apikeys.key}`
            )
            .then((respone) => {
                setWeather(respone.data);
                setQuery("");
            })
            .catch(function (error) {
                console.log(error);
                setWeather("");
                setQuery("");
                setError({ message: "Not Found", query: query });
            });
    };

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const defaults = {
        color: "white",
        size: 112,
        animate: true,
    };

    useEffect(() => {
        search("Delhi");
    }, []);

    return (
        <div className="forecast">
            {/* top animated logo of weather */}
            <div className="forecast-icon">
                <ReactAnimatedWeather
                    icon={props.icon}
                    color={defaults.color}
                    size={defaults.size}
                    animate={defaults.animate}
                />
            </div>
            <div className="today-weather">
                <h3>{props.text}</h3>
                <div className="search-box">
                    <input
                        type="text"
                        className="search-box"
                        placeholder=" Search any city"
                        onChange={(e) => setQuery(e.target.value)}
                        value={query}
                    />
                    <div className="img-box">
                        {" "}
                        <img
                            src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
                            onClick={search}
                        />
                    </div>
                </div>
                <ul>
                    {typeof weather.main !== "undefined" ? (
                        <div>
                            {" "}
                            <li className="cityHead">
                                <p>
                                    {weather.name}, {weather.sys.country}
                                </p>
                                <img
                                    className="temp"
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                />
                            </li>
                            <li>
                                Temperature{" "}
                                <span className="temp">
                                    {Math.round(weather.main.temp)}°c ({weather.weather[0].main}) 
                                </span>
                            </li>
                            <li>
                                Humidity{" "}
                                <span className="temp">
                                    {Math.round(weather.main.humidity)}% 
                                </span>
                            </li>
                            <li>
                                Visibility{" "}
                                <span className="temp">
                                    {Math.round(weather.visibility)} mi 
                                </span>
                            </li>
                            <li>
                                Wind Speed{" "}
                                <span className="temp">
                                    {Math.round(weather.wind.speed)} Km/h 
                                </span>
                            </li>
                        </div>
                    ) : (
                        <li>
                            {error.query} {error.message}
                        </li>
                    )}
                </ul>

            </div>
        </div>
    );
}
export default Forecast;