import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function showResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C.`
    );
  }
  let apiKey = `89d5c75b01ad14d48730b8ddfc9ae984`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showResponse);

  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      
    />
  );
}
