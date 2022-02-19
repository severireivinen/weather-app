import React from "react";
import ThreeHourWeather from "../components/ThreeHourWeather";

/*  It is possible to get multiple weather conditions for a single city. 
    For simplicy I've included the primary one in the app. It would be easy to just 
    map the results and get multiple conditions :

    {city.weather.map((weather) => (
        <p key={weather.id}>{weather.description}</p>
    ))}
*/

function CityWeather({ current, threeHour }) {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString([], { month: "short", day: "numeric" });

  return (
    <main className="flex flex-col mx-5 pt-2 space-y-3 pb-12">
      {/**Upper section */}
      <section className="bg-white p-3">
        {/**Upper of upper */}
        <div className="flex items-center justify-between pb-7">
          <div className="flex flex-col">
            <h2 className="text-lg">{current.name}</h2>
            <p className="text-xs text-gray-500">
              {current.weather[0].description}
            </p>
          </div>
          {/**Image */}
          <div className="flex items-center">
            <img
              src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
              className="w-14"
              alt="weather-icon"
            />
            <div className="flex">
              <div className="text-3xl">{current.main.temp}</div>
              <div className="font-bold text-xs">&deg;C</div>
            </div>
          </div>
        </div>

        {/**Lower of upper */}
        <div className="flex items-center justify-between pt-3">
          {/**Left side */}
          <div>
            <h2 className="text-sm">{date}</h2>
            <p className="text-xs text-gray-500">{time}</p>
          </div>
          {/**Right side */}
          <div className="text-xs text-gray-500">
            <p>{`Wind: ${current.wind.speed} m/s`}</p>
            <p>{`Humidity: ${current.main.humidity} %`}</p>
          </div>
        </div>
      </section>

      {/**Lower section */}
      <section className="flex justify-between flex-wrap gap-4 sm:flex-nowrap sm:justify-between xl:self-center xl:space-x-5">
        {threeHour.list.map((item) => (
          <ThreeHourWeather item={item} />
        ))}
      </section>
    </main>
  );
}

export default CityWeather;
