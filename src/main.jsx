import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes/router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2200,
        style: { borderRadius: "14px" },
      }}
    />
  </React.StrictMode>
);
