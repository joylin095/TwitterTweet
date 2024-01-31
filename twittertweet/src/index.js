import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main";
import Filter from "./filter";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { FilterProvider } from "./filterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <FilterProvider>
        <div className="flex flex-row">
          <article>
            <Filter />
          </article>
          <Main />
        </div>
      </FilterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
