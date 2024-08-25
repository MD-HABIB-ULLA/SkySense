import { IoLocationSharp } from "react-icons/io5";


const CurrentCondition = () => {
  // Check if the browser supports Geolocation
  // Function to get the current location and format it as a query parameter
  function getFormattedLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude.toFixed(4); // Adjust the precision as needed
          const longitude = position.coords.longitude.toFixed(4); // Adjust the precision as needed

          const formattedLocation = `q=${latitude},${longitude}`;
          console.log("Formatted Location:", formattedLocation);

          // Use formattedLocation in your API request or wherever needed
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  // Call the function to get and format the location
  getFormattedLocation();

  return (
    <div className="flex-1 bg-white/5 rounded-3xl p-5">
      <div className=" ">
        <div className="flex justify-between">
          <div className="px-3 py-2 border-[1.5px] border-gray-300/15 bg-[#742bec] cursor-pointer text-white flex gap-1 items-center rounded-full">
            <IoLocationSharp />
            <p className="text-sm font-bold md:block hidden">India</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="group peer ring-0 bg-black rounded-full outline-none duration-300 after:duration-300 w-[80px] h-10 px-3  shadow-md peer-checked:bg-black  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-9 after:w-9 after:left-1 after:flex after:mt-[2px] after:justify-center after:items-center peer-checked:after:translate-x-9 peer-hover:after:scale-95 flex justify-between">
              <p className="text-2xl font-bold text-white">F</p>
              <p className="text-2xl font-bold text-white">C</p>
            </div>
          </label>
        </div>
        <div className="grid grid-cols-3 mt-4 ">
          <div className=" space-y-6 ">
            <div className="text-white">
              <h3 className="text-3xl  text-white">Monday</h3>
              <p className="text-sm">24 Dec, 2023</p>
            </div>
            <div className="text-white">
              <div className="flex text-white text-5xl">
                <h1>26° C</h1>
              </div>
              <p className="text-sm">High: 27 Low: 10</p>
            </div>
          </div>
          <div className="flex  justify-center  flex-1 w-full  ">
            <img
              className=""
              src="//cdn.weatherapi.com/weather/128x128/night/353.png"
              alt=""
            />
          </div>
          <div className="flex items-end">
            <div className="flex flex-col justify-between w-full gap-3">
              <div className="text-end text-white">
                <h1 className="text-4xl ">Cloudy</h1>
                <p className="text-sm">Feels Like 26</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCondition;
