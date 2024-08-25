import uv from "/uv.svg";
import Humidity from "/Humidity.svg";
import wind from "/wind.svg";
import prasure from "/prasure.svg";
const TodayStatus = () => {
  return (
    <div className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3  text-white rounded-2xl">
      <h1 className="text-xl ">Today Highlight</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-3">
        <div className="bg-white/5 p-3 rounded-lg">
          <h1 className="mb-2">UV Index</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
              <img src={uv} className="h-full" alt="" />
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">2</h1>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <h1 className="mb-2">pressure (mb)</h1>
          <div className="flex justify-between gap-3">
            <div className="h-28">
              <img src={prasure} className="h-full" alt="" />
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">1004</h1>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <h1 className="mb-2">Humidity</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
              <img src={Humidity} className="h-full" alt="" />
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">93%</h1>
            </div>
          </div>
        </div>
        <div className="bg-white/5 p-3 rounded-lg ">
          <h1 className="mb-2">Wind speed (kmh)</h1>
          <div className="flex justify-between gap-3 ">
            <div className="h-28">
              <img src={wind} className="h-full" alt="" />
            </div>
            <div className="flex justify-end flex-col">
              <h1 className="text-3xl text-center">
                15.8 
              </h1>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default TodayStatus;
