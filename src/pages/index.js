import { useState } from "react";
import CitySelector from "../components/CitySelector";
import CityWeather from "../components/CityWeather";
import Header from "../components/Header";
import { defaultLocations } from "../util/weatherService";

export default function Home() {
  const [cityIds, setCityIds] = useState(defaultLocations);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col space-y-4">
      <Header />
      <CitySelector cityIds={cityIds} setCityIds={setCityIds} />
      {Object.values(cityIds).map((key) => (
        <CityWeather key={key.id} id={key.id} />
      ))}
    </div>
  );
}
