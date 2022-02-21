export const getWeatherDataById = async (id) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const getThreeHourDataById = async (id) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&cnt=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();
  return data;
};

export const defaultLocations = [
  { id: 634963, name: "Tampere" },
  { id: 655195, name: "Jyväskylä" },
  { id: 650225, name: "Kuopio" },
  { id: 660129, name: "Espoo" },
];
