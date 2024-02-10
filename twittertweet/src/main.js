import { useEffect, useState } from "react";
import { useFilter } from "./filterContext";
import TweetCard from "./tweetCard";

function Main() {
  const { filters, filterApplied, setFilterApplied } = useFilter();
  const [datas, setdatas] = useState([]);
  //const url = "https://twittertweet.onrender.com/getTweet";
  const url = "http://localhost:3001/getTweet";
  useEffect(() => {
    async function FetchData() {
      if (filterApplied) {
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
          mode: "cors",
        })
          .then((res) => res.json())
          .catch((err) => console.error(err))
          .then((response) => {
            setFilterApplied(false);
            setdatas(response);
          });
      }
    }
    FetchData();
  }, [filterApplied]);

  if (filterApplied) {
    return <div>Loading.....</div>;
  } else {
    return (
      <div className="grid grid-cols-3">
        {datas.map((data, index) => (
          <TweetCard
            key={index}
            analyticsNum={data.analyticsNum}
            content={data.content}
            url={data.url}
          />
        ))}
      </div>
    );
  }
}

export default Main;
