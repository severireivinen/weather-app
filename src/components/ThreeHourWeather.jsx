import React from "react";

function ThreeHourWeather({ item }) {
  return (
    <div className="flex flex-col bg-white items-center justify-center pt-2 border">
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-500">
          {item.dt_txt
            .split(" ")[1]
            .substring(0, item.dt_txt.split(" ")[1].lastIndexOf(":"))}
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="weather-image"
          className="w-14 md:w-28"
        />
        <div className="flex items-center justify-center pb-2">
          <p className="text-lg">{Math.round(item.main.temp)}</p>
          <span className="text-xs self-start pt-1">&deg;C</span>
        </div>
      </div>
      <div className="bg-sky-100 w-full text-gray-500 flex flex-col items-center h-full text-xs md:text-base border-t">
        <p>{item.wind.speed} m/s</p>
        <p>{item.main.humidity} %</p>
        <p>{item.rain && Math.round(Object.values(item.rain)) + " mm"}</p>
        <p>{item.snow && Math.round(Object.values(item.snow)) + " mm"}</p>
      </div>
    </div>
  );
}

export default ThreeHourWeather;
