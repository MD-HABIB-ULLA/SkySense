import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [webLoading, setWebLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [weatherData, SetWeatherData] = useState(null);
  const [showC, setShowC] = useState(true);
  const [error, setError] = useState("");

  if (error) {
    toast.error(error);
  }

  let location, current, forecast;
  if (weatherData) {
    ({ location, current, forecast } = weatherData);
  }

  let queryText;

if (currentLocation) {
  queryText = currentLocation;
} else if (searchText) {
  queryText = searchText;
} else {
  queryText = "bangladesh";
}

console.log(queryText)

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
    const queryText = searchText || currentLocation || "bangladesh";
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e5de58671d4d4f40ace112603242408&q=${queryText}&days=4`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error.message);  // Display the toast message
        } else {
          SetWeatherData(data);
        }
        setWebLoading(false);
      })
      .catch((err) => {
        setWebLoading(false);
        console.log(err);
      });
  }, [searchText, currentLocation]);
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
        loading,
        showC,
        setShowC,
        forecast
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;


