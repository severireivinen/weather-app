import { useEffect, useState } from "react";
import CitySelector from "../components/CitySelector";
import CityWeather from "../components/CityWeather";
import Header from "../components/Header";
import { getWeatherDataById } from "../util/weatherService";

export default function Home({ data }) {
  const [weatherData, setWeatherData] = useState(data);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col space-y-4">
      <Header />
      <CitySelector />
      {weatherData.map((city) => (
        <CityWeather
          key={city.current.id}
          current={city.current}
          threeHour={city.threeHour}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const ids = [634963, 655195, 650225, 660129];
  const dataArr = [];

  dataArr.push(await getWeatherDataById(ids[0]));
  dataArr.push(await getWeatherDataById(ids[1]));
  dataArr.push(await getWeatherDataById(ids[2]));
  dataArr.push(await getWeatherDataById(ids[3]));

  return {
    props: {
      data: dataArr,
    },
  };
}
