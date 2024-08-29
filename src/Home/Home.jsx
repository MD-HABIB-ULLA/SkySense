import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherProvider";
import Navbar from "../Components/Navbar/Navbar";
import CurrentCondition from "../Components/CurrentCondition/CurrentCondition";
import HourlyForecast from "../Components/HourlyForcast/HourlyForecast";
import TodayStatus from "../Components/TodayStatus/TodayStatus";
import DaysForecast from "../Components/DaysForecast/DaysForecast";

import icon from "/icon.svg";
const Home = () => {
  const {  webLoading } = useContext(WeatherContext);


  return (
    <div className="bg-[#060c1a] min-h-screen pb-3">
      {!webLoading ? (
        <div className="max-w-7xl m-auto px-2 md:px-10 ">
          <Navbar />
          <div className="mt-4">
            <div className="grid lg:grid-cols-7 grid-cols-1 gap-5">
              <div className="lg:first:col-span-4 flex justify-between gap-5 flex-col h-full">
                <CurrentCondition />
                <HourlyForecast />
              </div>
              <div className="lg:col-span-3 space-y-3 ">
                <TodayStatus />
                <DaysForecast />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center">
          <div to={"/"} className="py-4 flex gap-2 animate-zoom">
            <img src={icon} alt="" />
            <div className="text-2xl text-[#fff]">
              <span
                style={{
                  background: "linear-gradient(to right, #742bec, #481d8c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "900",
                }}
              >
                Sky
              </span>
              Sense
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
