import React from "react";

function ThreeHourWeather({ item }) {
  console.log(item);
  return (
    <div className="flex flex-col bg-white items-center justify-center pt-2">
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-500">
          {item.dt_txt
            .split(" ")[1]
            .substring(0, item.dt_txt.split(" ")[1].lastIndexOf(":"))}
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="weather-image"
        />
        <div className="flex items-center justify-center pb-2">
          <p className="text-lg">{item.main.temp}</p>
          <span className="text-xs self-start pt-1">&deg;C</span>
        </div>
      </div>
      <div className="bg-sky-200 w-full flex flex-col items-center h-full text-xs p-2">
        <p>{item.wind.speed} ms</p>
        <p>{item.main.humidity} %</p>
        <p>
          {item.rain ? JSON.stringify(item.rain) : JSON.stringify(item.snow)}
        </p>
      </div>
    </div>
  );
}

export default ThreeHourWeather;
