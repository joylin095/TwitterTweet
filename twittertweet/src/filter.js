import React from "react";
import { Card, Button, Typography } from "@material-tailwind/react";
import InputFilter from "./inputFilter";
import { useFilter } from "./filterContext";

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

export default function Filter() {
  const { filters, setFilters, filterApplied, setFilterApplied } = useFilter();
  const handleUserChange = (index, value) => {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters[index].user = value;
      return newFilters;
    });
  };
  const handleDateChange = (index, value) => {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters[index].date = value;
      return newFilters;
    });
  };
  const handleAnalyticsChange = (index, value) => {
    setFilters((prevFilters) => {
      const newFilters = [...prevFilters];
      newFilters[index].analytics = value;
      return newFilters;
    });
  };
  const removeInputFilter = (index) => {
    setFilters((prevFilters) => prevFilters.filter((_, i) => i !== index));
  };
  const addInputFilter = () => {
    setFilters((prevFilters) => [
      ...prevFilters,
      {
        user: "",
        date: date,
        analytics: 15000,
      },
    ]);
  };
  const repeatComponent = filters.map((filter, index) => (
    <InputFilter
      key={index}
      user={filter.user}
      date={filter.date}
      analytics={filter.analytics}
      onUserChange={(value) => handleUserChange(index, value)}
      onDateChange={(value) => handleDateChange(index, value)}
      onAnalyticsChange={(value) => handleAnalyticsChange(index, value)}
      onRemove={() => removeInputFilter(index)}
    />
  ));
  const onSubmit = (e) => {
    e.preventDefault();
    setFilterApplied(true);
  };
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Filter
      </Typography>
      <form
        className="mt-5 mb-2 w-28 max-w-screen-lg sm:w-52 "
        onSubmit={onSubmit}
      >
        <FilterButton filterApplied={filterApplied}></FilterButton>
        {repeatComponent}
        <Button
          className="w-full"
          color="green"
          disabled={filterApplied}
          onClick={addInputFilter}
        >
          Add Item
        </Button>
      </form>
    </Card>
  );
}

function FilterButton({ filterApplied }) {
  return (
    <Button className="mb-3 w-full" type="submit" disabled={filterApplied}>
      Filter
    </Button>
  );
}
