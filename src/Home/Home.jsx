import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherProvider";
import Navbar from "../Components/Navbar/Navbar";
import CurrentCondition from "../Components/CurrentCondition/CurrentCondition";
import HourlyForecast from "../Components/HourlyForcast/HourlyForecast";
import TodayStatus from "../Components/TodayStatus/TodayStatus";
import DaysForecast from "../Components/DaysForecast/DaysForecast";

const Home = () => {
  const { text } = useContext(WeatherContext);

  console.log(text);
  return (
    <div className="bg-[#060c1a] min-h-screen">
      <div className="max-w-7xl m-auto px-5 md:px-10 ">
        <Navbar />
        <div className="mt-4">
          <div className="grid lg:grid-cols-7 grid-cols-1 gap-5">
            <div className="lg:first:col-span-4 flex justify-between gap-5 flex-col h-full">
              <CurrentCondition />
              <HourlyForecast />
            </div>
            <div className="lg:col-span-3 space-y-3 ">
              <TodayStatus />
              <DaysForecast/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
