export const getWeatherDataById = async (id) => {
  const currentRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const current = await currentRes.json();

  const threeHourRes = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&cnt=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const threeHour = await threeHourRes.json();

  return { current, threeHour };
};

/*export const getThreeHourDataById = async (id) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&cnt=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();
  return data;
};*/
