import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import "./styling/root.css";
import Root from "./routes/root";
import App from "./routes/app";
import Resistor from "./routes/resistor";

const router = createBrowserRouter([
    { // Landing Page
        path: "/",
        element: <Root />,
    },
    {
        path: "/app",
        element: <App />,
    },
    { // Information pages about various components
        path: "/resistor/",
        element: <Resistor />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);