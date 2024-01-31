import React, { createContext, useContext, useState } from "react";

const filterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(
    Array(10)
      .fill(null)
      .map(() => ({ user: "", date: "", analytics: "" }))
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
