import React from "react";
import { defaultLocations } from "../util/weatherService";

function CitySelector({ setCityIds }) {
  return (
    <select
      onChange={(e) => setCityIds(JSON.parse(e.target.value))}
      className="mx-5 p-3 outline-none border"
    >
      <option value={JSON.stringify(Object.values(defaultLocations))}>
        Kaikki kaupungit
      </option>
      {Object.values(defaultLocations).map((val) => (
        <option value={JSON.stringify([val])} key={val.id}>
          {val.name}
        </option>
      ))}
    </select>
  );
}

export default CitySelector;
