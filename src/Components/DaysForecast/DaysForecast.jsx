import { useContext } from "react";
import { WeatherContext } from "../../Context/WeatherProvider";

const DaysForecast = () => {
  const { loading, showC, forecast } = useContext(WeatherContext);
  console.log(forecast?.forecastday);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Create options for formatting the date
    const options = {
      weekday: "long", // Full weekday name (e.g., "Friday")
      day: "numeric", // Numeric day of the month (e.g., "1")
      month: "short", // Short month name (e.g., "Sep")
    };

    // Format the date
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    return formatter.format(date);
  };
  return (
    <div>
      <div className="bg-gradient-to-t  from-[#0E1421] via-[#1d325f4c] to-[#0E1421] p-3 text-white rounded-2xl">
        <h1 className="text-xl ">Days Forecast</h1>
        {!loading ? (
          <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-3">
            {forecast?.forecastday.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 grid grid-cols-3 p-3 rounded-lg  items-center"
              >
                {showC ? (
                  <h1 className="text-center text-base  ">
                    {item?.day.avgtemp_c}° C
                  </h1>
                ) : (
                  <h1 className="text-center text-base  ">
                    {item?.day.avgtemp_f}° F
                  </h1>
                )}
                <img
                  src={item.day.condition.icon}
                  className="h-10 mx-auto
             w-10"
                  alt=""
                />
                <h1 className="text-sm text-right">{formatDate(item.date)}</h1>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-44  w-full">
            <div className="loader"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DaysForecast;
