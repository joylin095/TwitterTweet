import GetTweetURL from "./getTweetURL.js";

export default async function GetTweet(filters) {
  const tweet = [];
  // for (const filter of filters) {
  //   if (filter.user && filter.date && filter.analytics) {
  //     const userURL = "https://twitter.com/" + filter.user.replace("@", "");
  //     const result = await GetTweetURL(userURL, filter.date, filter.analytics);
  //     tweet.push(...result);
  //   }
  // }
  await Promise.all(
    filters.map(async (filter) => {
      if (filter.user && filter.date && filter.analytics) {
        const userURL = "https://twitter.com/" + filter.user.replace("@", "");
        const result = await GetTweetURL(
          userURL,
          filter.date,
          filter.analytics
        );
        tweet.push(...result);
      }
    })
  );
  tweet.sort(function (a, b) {
    return b.analyticsNum - a.analyticsNum;
  });
  return tweet;
}
