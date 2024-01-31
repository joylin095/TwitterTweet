import { useEffect } from "react";
import { useFilter } from "./filterContext";
function Main() {
  const { filters, filterApplied, setFilterApplied } = useFilter();
  const url = "http://localhost:3001/getTweet";
  useEffect(() => {
    if (filterApplied) {
      setFilterApplied(false);
      const response = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filters),
        mode: "cors",
      });
    }
  }, [filterApplied]);

  return <div>loading</div>;
}

export default Main;
