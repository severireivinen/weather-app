import React, { useEffect, useState } from "react";
import ThreeHourWeather from "../components/ThreeHourWeather";
import {
  getThreeHourDataById,
  getWeatherDataById,
} from "../util/weatherService";

/*  It is possible to get multiple weather conditions for a single city. 
    For simplicy I've included the primary one in the app. It would be easy to just 
    map the results and get multiple conditions :

    {city.weather.map((weather) => (
        <p key={weather.id}>{weather.description}</p>
    ))}
*/

function CityWeather({ id }) {
  const [weatherData, setWeatherData] = useState([]);
  const [threeHourData, setThreeHourData] = useState([]);

  useEffect(() => {
    getWeatherDataById(id).then((data) => setWeatherData(data));
    getThreeHourDataById(id).then((data) => setThreeHourData(data));
  }, []);

  if (weatherData.length < 1) {
    return <div>Loading</div>;
  }

  return (
    <main className="flex flex-col mx-5 pt-2 space-y-3 pb-12">
      <section className="bg-white p-3 border">
        <section className="flex items-center justify-between pb-7">
          <div className="flex flex-col">
            <h2 className="text-lg md:text-2xl">{weatherData.name}</h2>
            <p className="text-xs md:text-sm text-gray-500">
              {weatherData.weather[0].description}
            </p>
          </div>
          <div className="flex items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              className="w-14 md:w-28"
              alt="weather-icon"
            />
            <div className="flex">
              <div className="text-3xl md:text-4xl">
                {Math.round(weatherData.main.temp)}
              </div>
              <div className="font-bold text-xs md:text-base">&deg;C</div>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-between pt-3">
          <div>
            <h2 className="text-sm md:text-base">
              {new Date().toLocaleDateString([], {
                month: "short",
                day: "numeric",
              })}
            </h2>
            <p className="text-xs md:text-base text-gray-500">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className="text-xs md:text-base text-gray-500">
            <p>{`Wind: ${weatherData.wind.speed} m/s`}</p>
            <p>{`Humidity: ${weatherData.main.humidity} %`}</p>
          </div>
        </section>
      </section>

      <section className="flex justify-between">
        {threeHourData.length < 1 ? (
          <div>Loading...</div>
        ) : (
          threeHourData.list.map((item) => (
            <ThreeHourWeather key={item.dt} item={item} />
          ))
        )}
      </section>
    </main>
  );
}

export default CityWeather;
