import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = React.useState({});
  const [location, setLocation] = React.useState("");

  // const url = `http://https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b7f6d336c0539940cb0081c5a978ccfb`;
  const url = location
    ? `https://api.weatherapi.com/v1/current.json?key=056946f0f03f49d883072834250801&q=${location}&aqi=no`
    : null;

  const searchlocation = (event) => {
    if (event.key === "Enter" && location) {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder=""
          onKeyUp={searchlocation}
          type="text"
        />
      </div>
      <div className="top">
        <div className="location">
          <p>{data.location?.name}</p>
        </div>
        <div className="temperature">
          {data.current ? <h1>{data.current?.temp_c}°c</h1> : null}
        </div>
        <div className="description">
          <p>{data.current?.condition?.text}</p>
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          <p className="bold">{data.current?.feelslike_c}°c</p>
          <p className="bold">Feels Like</p>
        </div>
        <div className="time">
          <p>{data.current?.last_updated}</p>
          <p className="bold">Last updated</p>
        </div>
        <div className="humidity">
          <p>{data.current?.humidity}%</p>
          <p className="bold">Humidity</p>
        </div>
        <div className="wind">
          <p>{data.current?.wind_kph} kph</p>
          <p className="bold">Wind speed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
