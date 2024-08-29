import { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { WeatherContext } from "../../Context/WeatherProvider";

const CurrentCondition = () => {
  const { showC, setShowC, loading, location, current, forecast } =
    useContext(WeatherContext);


  const date = new Date(location?.localtime);


  const options = { weekday: "long" };
  const dayOfWeek = date.toLocaleDateString("en-US", options);

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  // Check if the browser supports Geolocation
  // Function to get the current location and format it as a query parameter
  const handleCheckBox = () => {
    setShowC(!showC);
  };

  return (
    <div className="flex-1 bg-white/5 rounded-3xl p-5">
      {!loading ? (
        <div className=" ">
          <div className="flex justify-between">
            <div className="px-3 py-2 border-[1.5px] border-gray-300/15 bg-[#742bec] cursor-pointer text-white flex gap-1 items-center rounded-full">
              <IoLocationSharp />
              <p className="text-sm font-bold  ">{location?.name}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={handleCheckBox}
                className="sr-only peer"
              />
              <div className="group peer ring-0 bg-black rounded-full outline-none duration-300 after:duration-300 w-[80px] h-10 px-3  shadow-md peer-checked:bg-black  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-9 after:w-9 after:left-1 after:flex after:mt-[2px] after:justify-center after:items-center peer-checked:after:translate-x-9 peer-hover:after:scale-95 flex justify-between">
                <p className="text-2xl font-bold text-white">C</p>
                <p className="text-2xl font-bold text-white">F</p>
              </div>
            </label>
          </div>
          <div className="grid grid-cols-3 mt-4 ">
            <div className=" space-y-6 ">
              <div className="text-white">
                <h3 className="text-3xl  text-white">{dayOfWeek}</h3>
                <p className="text-sm">{formattedDate}</p>
              </div>
              <div className="text-white">
                <div className="flex text-white md:text-5xl text-3xl">
                  {showC ? (
                    <h1>{current?.temp_c}° C</h1>
                  ) : (
                    <h1>{current?.temp_f}° F</h1>
                  )}
                </div>
                <div className="text-sm flex gap-2">
                  High:
                  {showC ? (
                    <h1>{forecast?.forecastday[0].day.maxtemp_c} </h1>
                  ) : (
                    <h1>{forecast?.forecastday[0].day.maxtemp_f} </h1>
                  )}
                  Low:{" "}
                  {showC ? (
                    <h1>{forecast?.forecastday[0].day.mintemp_c} </h1>
                  ) : (
                    <h1>{forecast?.forecastday[0].day.mintemp_f} </h1>
                  )}
                </div>
              </div>
            </div>
            <div className="flex  justify-center   flex-1 w-full  ">
              <img
                className=""
                src={current?.condition.icon.replace("64x64", "128x128")}
                alt=""
              />
            </div>
            <div className="flex items-end">
              <div className="flex flex-col justify-between w-full gap-3">
                <div className="text-end text-white">
                  <h1 className="md:text-4xl text-2xl ">
                    {current?.condition.text}
                  </h1>
                  <h1 className="text-sm ">
                    Feels Like{" "}
                    {showC ? (
                      <span>{current?.feelslike_c} </span>
                    ) : (
                      <span>{current?.feelslike_f} </span>
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-44  w-full">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default CurrentCondition;
