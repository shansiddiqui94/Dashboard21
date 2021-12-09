import React, { useState } from "react";
import dotenv from "dotenv";
import axios from "axios";
import Form from "./Form";

dotenv.config();

function FetchWeather() {
  const [displayedWeather, setDisplayedWeather] = useState("");
  const [city, setCity] = useState("");

  const fetchData = async () => {
    // create an if statement
    if (!city) return; // if city is empty dont do anything

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      setDisplayedWeather(response.data);
    } catch (error) {
      console.error(`Error: Try again ${error}`);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
        onChange={(e) => {
          setCity(e.target.value); // when user submits it will fetch the data for city
        }}
        value={city}
      />
      {JSON.stringify(displayedWeather)}
    </div>
  );
}

export default FetchWeather;
