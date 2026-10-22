import React from "react";
import "./App.css";
import axios from "axios";

// Backgrounds live in /public/assets.
// PUBLIC_URL keeps them working on GitHub Pages (/weather-api/) and locally (/).
const bgDay = `${process.env.PUBLIC_URL}/assets/bg.jpg`;
const bgNight = `${process.env.PUBLIC_URL}/assets/bg2.jpg`;

function App() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");
  const [error, setError] = React.useState("");

  const isNight = data.current && data.current.is_day === 0;

  const searchlocation = (event) => {
    if (event.key !== "Enter" || !location) return;
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=056946f0f03f49d883072834250801&q=${location}&aqi=no`
      )
      .then((response) => {
        setData(response.data);
        setError("");
      })
      .catch(() => setError("City not found — check the spelling and try again"));
  };

  return (
    <div
      className={`app ${isNight ? "night" : ""}`}
      style={{
        backgroundImage: `linear-gradient(rgba(10, 20, 35, .40), rgba(10, 20, 35, .55)), url(${
          isNight ? bgNight : bgDay
        })`,
      }}
    >
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter a city — press Enter"
          onKeyUp={searchlocation}
          type="text"
          autoFocus
        />
      </div>

      <div className="top">
        <div className="location">
          <p>{data.location?.name || (error ? "" : "Weather at your fingertips")}</p>
        </div>
        {error && <p className="error">{error}</p>}
      </div>

      {data.current ? (
        <>
          <div className="temperature">
            <h1>{Math.round(data.current.temp_c)}°c</h1>
          </div>
          <div className="description">
            <p>{data.current.condition?.text}</p>
          </div>

          <div className="bottom">
            <div className="feels">
              <p>{Math.round(data.current.feelslike_c)}°c</p>
              <p className="bold">Feels Like</p>
            </div>
            <div className="time">
              <p>{data.current.last_updated}</p>
              <p className="bold">Last Updated</p>
            </div>
            <div className="humidity">
              <p>{data.current.humidity}%</p>
              <p className="bold">Humidity</p>
            </div>
            <div className="wind">
              <p>{Math.round(data.current.wind_kph)} kph</p>
              <p className="bold">Wind Speed</p>
            </div>
          </div>
        </>
      ) : (
        !error && <div className="hint"><p>Search a city — Mumbai, Tokyo, Berlin…</p></div>
      )}
    </div>
  );
}

export default App;
