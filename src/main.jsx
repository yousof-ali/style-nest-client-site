import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import AuthProvider from "./ContextAPI/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
      <React.StrictMode>
        <div>
          <RouterProvider router={router} />
        </div>
      </React.StrictMode>
    </AuthProvider>

);
