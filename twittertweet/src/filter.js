import React from "react";
import { Card, Button, Typography } from "@material-tailwind/react";
import InputFilter from "./inputFilter";
import { useFilter } from "./filterContext";

export default function Filter() {
  const { filters, setFilters, setFilterApplied } = useFilter();
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
  const repeatComponent = filters.map((filter, index) => (
    <InputFilter
      key={index}
      user={filter.user}
      date={filter.date}
      analytics={filter.analytics}
      onUserChange={(value) => handleUserChange(index, value)}
      onDateChange={(value) => handleDateChange(index, value)}
      onAnalyticsChange={(value) => handleAnalyticsChange(index, value)}
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
        <Button className="mb-3 w-full" type="submit">
          Filter
        </Button>
        {repeatComponent}
      </form>
    </Card>
  );
}
