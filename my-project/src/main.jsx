import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { CountryProvider } from "./context/CountryProvider";
import "./index.css"

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
    <CountryProvider>
            <App className="dark:bg-black"/>
    </CountryProvider>
)