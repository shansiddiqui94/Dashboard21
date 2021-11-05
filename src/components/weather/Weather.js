import React, { useState, useEffect } from "react";
import dotenv from "dotenv";
import axios from "axios";
import Form from "./Form";

dotenv.config();

function Fetchweather() {
  const [weather, setWeather] = useState(""); // will return response of weather data

  const fetchData = async () => {
    //send the data and then grab it for return
    //.then() promise to take something and return it
    const response = await axios
      .get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_API_KEY}`)
      .then((res) => res.json())
      .catch((error) => console.error(`Error: Try again ${error}`));

    setWeather(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Form getWeather={weather} />
      {JSON.stringify(weather)}
    </div>
  );
}

export default Fetchweather;

// e.preventDefault();
//   axios
//     .get(`${process.env.REACT_APP_BASE_URL}${process.env.REACT_API_KEY}`)
//     .then((res) => res.json())
//     .then((data) => data)
//     .then((response) => {
//       const res = response.data;
//       setWeather(res);
//     })
//     .catch((error) => console.error(`Error: Try again ${error}`));
// };
