//import GetTweetURL from "./getTweetURL";

export default async function GetTweet(filters) {
  const result = await Promise.all(
    filters.map(async (filter) => {
      if (filter.user && filter.date && filter.analytics) {
        const userURL = "https://twitter.com/" + filter.user.replace("@", "");
        // const result = await GetTweetURL(
        //   userURL,
        //   filter.date,
        //   filter.analytics
        // );
        // return result;
      }
    })
  );
  //console.log(result);
}
