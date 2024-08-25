

const DaysForecast = () => {
  return (
    <div>
      <div className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3 text-white rounded-2xl">
        <h1 className="text-xl ">Days  Forecast</h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-3">
       
          
       
          <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
            <h1 className="text-2xl">26°</h1>
            <img src="//cdn.weatherapi.com/weather/64x64/night/353.png" className="h-10
             w-10" alt="" />
            <h1 className="text-sm">Friday 1 Sep</h1>
          </div>
          <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
            <h1 className="text-2xl">26°</h1>
            <img src="//cdn.weatherapi.com/weather/64x64/night/353.png" className="h-10
             w-10" alt="" />
            <h1 className="text-sm">Friday 1 Sep</h1>
          </div>
          <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
            <h1 className="text-2xl">26°</h1>
            <img src="//cdn.weatherapi.com/weather/64x64/night/353.png" className="h-10
             w-10" alt="" />
            <h1 className="text-sm">Friday 1 Sep</h1>
          </div>
          <div className="bg-white/5 p-3 rounded-lg flex justify-between items-center">
            <h1 className="text-2xl">26°</h1>
            <img src="//cdn.weatherapi.com/weather/64x64/night/353.png" className="h-10
             w-10" alt="" />
            <h1 className="text-sm">Friday 1 Sep</h1>
          </div>
   
       
        </div>
      </div>
    </div>
  );
};

export default DaysForecast;
