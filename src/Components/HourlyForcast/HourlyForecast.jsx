import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherProvider";

const HourlyForecast = () => {
  const { forecast, showC, loading } = useContext(WeatherContext);
  const currentTime = new Date(); // Current time in the local time zone
  const bangladeshOffset = 6 * 60 * 60 * 1000; // UTC+6 in milliseconds
  const bangladeshTime = new Date(currentTime.getTime() + bangladeshOffset); // Convert to Bangladeshi time

  // Convert to 'YYYY-MM-DD HH:mm' format
  const currentFormattedTime = bangladeshTime
    .toISOString()
    .slice(0, 16)
    .replace("T", " ");

  // Filter out past data
  const futureData = forecast?.forecastday[0].hour
    .concat(forecast?.forecastday[1].hour)
    .filter((hourData) => {
      return hourData.time >= currentFormattedTime;
    })
    .slice(0, 5);
  function formatTo12Hour(datetimeStr) {
    // Create a Date object from the input string
    const date = new Date(datetimeStr.replace(" ", "T") + "Z"); // Convert to ISO 8601 format with Z for UTC

    // Get hours and minutes
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();

    // Determine AM or PM suffix
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Remove leading zero from minutes
    minutes = minutes;

    // Return formatted time string
    return `${hours} ${ampm}`;
  }
  console.log(forecast?.forecastday[1].day.condition.text);

  return (
    <div className="bg-white/5 rounded-3xl md:p-5 p-2">
      {!loading ? (
        <div className="grid grid-cols-4 md:gap-5 gap-2">
          <div className="col-span-3 space-y-2">
            <div className="space-y-2">
              <div className="text-2xl ">
                <p className="text-white">Hourly Forecast</p>
              </div>
              <div className="p-2 bg-gradient-to-tr rounded-2xl from-[#0E1421] via-[#1d325f4c] to-[#0E1421]">
                <div className="grid grid-cols-5 md:gap-2 gap-[2px]">
                  {futureData?.map((item, i) => (
                    <div
                      key={i}
                      className="text-white flex flex-col justify-between gap-1 bg-white/5 p-1 rounded-lg"
                    >
                      {" "}
                      <p className="text-center md:text-base text-[10px]">
                        {formatTo12Hour(item.time)}
                      </p>
                      <img src={item.condition.icon} alt="" />
                      {showC ? (
                        <h1 className="text-center md:text-base text-[10px]">
                          {item?.temp_c}° C
                        </h1>
                      ) : (
                        <h1 className="text-center md:text-base text-[10px]">
                          {item?.temp_f}° F
                        </h1>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-tr  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3 text-white rounded-2xl flex justify-between">
              <div className="flex gap-2 items-center">
                <div>
                  <p>Tomorrow</p>
                  <p className="text-white/40 text-[8px]">
                    {forecast?.forecastday[1].day.condition.text}
                  </p>
                </div>
                <div className="font-bold">
                  {showC ? (
                    <h1 className="text-center md:text-4xl text-xl">
                      {forecast?.forecastday[1].day.avgtemp_c}° C
                    </h1>
                  ) : (
                    <h1 className="text-center md:text-4xl text-xl">
                      {forecast?.forecastday[1].day.avgtemp_f}° F
                    </h1>
                  )}
                </div>
              </div>
              <div>
                <img src={forecast?.forecastday[1].day.condition.icon} alt="" />
              </div>
            </div>
          </div>
          <div
            className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] px-2 py-3 text-white rounded-2xl 
      flex flex-col justify-between"
          >
            <div className="space-y-1">
              <p className="text-white/40 md:text-base text-sm">Sunrise</p>
              <h1 className="md:text-2xl lg:text-3xl text-white">
                {forecast?.forecastday[0].astro.sunrise.split(" ")[0]}
                <span className="text-white/40 md:text-sm text-xs">
                  {" "}
                  {forecast?.forecastday[0].astro.sunrise.split(" ")[1]}
                </span>
              </h1>
            </div>
            <div className="space-y-1">
              <p className="text-white/40 md:text-base text-sm">Sunset</p>
              <h1 className="md:text-2xl lg:text-3xl text-white">
                <span className="font-bold">
                  {" "}
                  {forecast?.forecastday[0].astro.sunset.split(" ")[0]}
                </span>
                <span className="text-white/40 md:text-sm text-xs">
                  {" "}
                  {forecast?.forecastday[0].astro.sunset.split(" ")[1]}
                </span>
              </h1>
            </div>
            <div className="space-y-1">
              <p className="text-white/40 md:text-base text-sm">Moonrise</p>
              <h1 className="md:text-2xl lg:text-3xl text-white">
                <span className="font-bold">
                  {" "}
                  {forecast?.forecastday[0].astro.moonrise.split(" ")[0]}
                </span>
                <span className="text-white/40 md:text-sm text-xs">
                  {" "}
                  {forecast?.forecastday[0].astro.moonrise.split(" ")[1]}
                </span>
              </h1>
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

export default HourlyForecast;
