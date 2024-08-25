import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Home/Home.jsx";
import WeatherProvider from "./Context/WeatherProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WeatherProvider>
      
      <RouterProvider router={router} />
    </WeatherProvider>
  </React.StrictMode>
);
