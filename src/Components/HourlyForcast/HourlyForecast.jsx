const HourlyForecast = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="bg-white/5 rounded-3xl p-5">
      <div className="grid grid-cols-4 gap-5">
        <div className="col-span-3 space-y-3">
          <div className="space-y-3">
            <div className="text-2xl ">
              <p className="text-white">Hourly Forecast</p>
            </div>
            <div className="p-2 bg-gradient-to-tr rounded-2xl from-[#0E1421] via-[#1d325f4c] to-[#0E1421]">
              <div className="grid grid-cols-5 gap-2">
                {array.map((item, i) => (
                  <div
                    key={i}
                    className="text-white flex flex-col justify-between gap-3 bg-white/5 p-2 rounded-lg"
                  >
                    {" "}
                    <p className="text-center">1pm</p>
                    <img
                      src="//cdn.weatherapi.com/weather/64x64/night/353.png"
                      alt=""
                    />
                    <h1>26° C</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-tr  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3 text-white rounded-2xl flex justify-between">
            <div className="flex gap-3 items-center">
              <div>
                <p>Tomorrow</p>
                <p className="text-white/40 text-sm">Thunder storm</p>
              </div>
              <div>
                <h1 className="text-4xl">26°</h1>
              </div>
            </div>
            <div>
              <img
                src="//cdn.weatherapi.com/weather/64x64/night/353.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3 text-white rounded-2xl 
        flex flex-col justify-between">
          <div className="space-y-1">
            <p className="text-white/40 text-base">Sunrise</p>
            <h1 className="text-3xl text-white">
              6.45 <span className="text-white/40 text-sm">Am</span>
            </h1>
          </div>
          <div className="space-y-1">
            <p className="text-white/40 text-base">Sunrise</p>
            <h1 className="text-3xl text-white">
              6.45 <span className="text-white/40 text-sm">Am</span>
            </h1>
          </div>
          <div className="space-y-1">
            <p className="text-white/40 text-base">Sunrise</p>
            <h1 className="text-3xl text-white">
              6.45 <span className="text-white/40 text-sm">Am</span>
            </h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
