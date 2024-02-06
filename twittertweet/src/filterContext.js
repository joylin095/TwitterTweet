import React, { createContext, useContext, useState } from "react";

const filterContext = createContext();
let objectDate = new Date();
let year = objectDate.getFullYear();
let month = objectDate.getMonth() + 1;
let day = objectDate.getDate();
if (month < 10) {
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}
let date = `${year}-${month}-${day}`;
const initUser = [
  "sanyi_eth_",
  "KuiGas",
  "maik2hello",
  "Greta0086",
  "YourAirdropETH",
  "ZF_lab",
  "lubi366",
  "DeFi8362",
  "Meta8Mate",
];

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(
    Array(10)
      .fill(null)
      .map((_, index) => {
        if (initUser[index]) {
          return {
            user: initUser[index],
            date: date,
            analytics: 15000,
          };
        }
        return {
          user: "",
          date: date,
          analytics: 15000,
        };
      })
  );
  const [filterApplied, setFilterApplied] = useState(false);
  return (
    <filterContext.Provider
      value={{ filters, setFilters, filterApplied, setFilterApplied }}
    >
      {children}
    </filterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(filterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
