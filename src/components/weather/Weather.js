import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";
import Form from "./Form";

dotenv.config();

function Fetchweather() {
  const [weather, setWeather] = useState("");
  const [displayedWeather, setDisplayedWeather] = useState("");

  const fetchData = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_API_KEY}`)
      .then((res) => res.json())
      .catch((error) => console.error(`Error: Try again ${error}`));

    setWeather(response);
    setDisplayedWeather(response);
  };
  console.log(weather);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Form getWeather={setWeather} />
      {JSON.stringify(displayedWeather)}
    </div>
  );
}

export default Fetchweather;
