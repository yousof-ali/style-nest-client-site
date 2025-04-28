import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-white max-w-[2000px] mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
