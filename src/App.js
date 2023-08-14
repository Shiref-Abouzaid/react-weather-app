import logo from "./logo.svg";
import Search from "./components/search/search";
import "./App.css";
import CurrentWeather from "./components/current-weather";
import { WATHER_API_UTL, WATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFeth = fetch(
      `${WATHER_API_UTL}/weather?lat=${lat}&lon=${lon}&appid=${WATHER_API_KEY}&units=metric`
    );
    const forcastFetch = fetch(
      `${WATHER_API_UTL}/forecast?lat=${lat}&lon=${lon}&appid=${WATHER_API_KEY}`
    );

    Promise.all([currentWeatherFeth, forcastFetch])
      .then(async (response) => {
        const watherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...watherResponse });
        setForcast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(currentWeather);
  console.log(forcast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
