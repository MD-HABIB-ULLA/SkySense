import { createContext, useState } from "react";

export const WeatherContext = createContext(null);

const WeatherProvider = ({ children }) => {

  const [text, setText] = useState("hello");


  return (
    <WeatherContext.Provider value={{ text, setText }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
