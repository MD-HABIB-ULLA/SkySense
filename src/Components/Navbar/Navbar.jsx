import { Link } from "react-router-dom";
import icon from "/icon.svg";
import { IoLocationSharp } from "react-icons/io5";
const Navbar = () => {
  const handelForm = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
  };
  return (
    <div className="flex gap-5 ">
      <div>
        <Link to={"/"} className="py-4 flex gap-2">
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
        </Link>
      </div>
      <div className="flex-1  my-auto  ">
        <form onSubmit={handelForm}>
          <div className="relative  ">
            <input
              name="search"
              className="block w-full  px-3 py-2 text-sm  rounded-full  outline-none bg-white/5 text-white"
              placeholder="Search city..."
              required
            />

            <button
              type="submit"
              className="text-white absolute right-3 bottom-2.5 "
            >
              {" "}
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="  my-auto">
        <div className="px-3 py-2 border-[1.5px] border-gray-300/15 bg-[#742bec] cursor-pointer text-white flex gap-1 items-center rounded-full">
          <IoLocationSharp /> <p className="text-sm font-bold md:block hidden">Current Location</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
