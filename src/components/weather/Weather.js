import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";
import Form from "./Form";
import "/Users/shansiddiqui/Desktop/dashboard/src/components/weather/weather.css";
dotenv.config();

export default function FetchWeather() {
  const [displayedWeather, setDisplayedWeather] = useState();
  const [city, setCity] = useState("New York City");
  const [temp, setTemp] = useState();
  const [description, setDescription] = useState("");

  const fetchData = async () => {
    // create an if statement
    if (!city) return; // if city is empty dont do anything

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      setDisplayedWeather(response.data.weather[0].main); //only returns 1 piece of data
      //make more hooks to gather more peices of data
    } catch (error) {
      console.error(`Error: Try again ${error}`);
    }
  };

  const temperture = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setTemp(response.data.main.temp); //sets the temperture
    } catch (error) {
      console.error(`Error: Try again ${error}`);
    }
  };

  const about = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setDescription(response.data.weather[0].description);
    } catch (error) {
      console.error(`Error: Try again ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
    temperture();
    about();
  });

  return (
    <div className="weatherContainer">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onChange={(e) => {
          setCity(e.target.value); // when user submits it will fetch the data for city
        }}
        value={city}
      />
      <div className="daWeather">
        {displayedWeather}
        {temp}
        {description}
      </div>
    </div>
  );
}
