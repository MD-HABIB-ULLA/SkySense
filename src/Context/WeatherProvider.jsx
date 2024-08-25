import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [webLoading, setWebLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weatherData, SetWeatherData] = useState(null);

  let location, current, forecast;
  if (weatherData) {
    ({ location, current, forecast } = weatherData);
  }

  let queryText;

  if (searchText) {
    queryText = searchText;
  }
  if (currentLocation) {
    queryText = currentLocation;
  }
  useEffect(() => {
    setWebLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude.toFixed(4); // Adjust the precision as needed
          const longitude = position.coords.longitude.toFixed(4); // Adjust the precision as needed

          const formattedLocation = `${latitude},${longitude}`;

          setCurrentLocation(formattedLocation);
          setWebLoading(false);
        },
        (error) => {
          setWebLoading(false);
          console.error("Error getting location:", error);
        }
      );
    } else {
      setWebLoading(false);
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const queryText = searchText || currentLocation;
    if (!queryText) return; // If both are empty, don't fetch data

    setLoading(true);
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e5de58671d4d4f40ace112603242408&q=${queryText}&days=4`
    )
      .then((res) => res.json())
      .then((data) => {
        SetWeatherData(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [searchText, currentLocation]); // Fetch weather data when searchText or currentLocation changes
  // console.log(location, current, forecast)
  console.log(weatherData);

  return (
    <WeatherContext.Provider
      value={{
        searchText,
        setSearchText,
        setCurrentLocation,
        webLoading,
        current,
        location,
        loading
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
