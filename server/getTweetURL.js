import puppeteer from "puppeteer";
import "dotenv/config";

export default async function GetTweetURL(userURL, datetime, peopelLook) {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: false,
    ignoreHTTPSErrors: false,
  });

  const page = await browser.newPage();

  await page.goto(userURL, {
    waitUntil: "networkidle2",
  });
  await page.setCookie({
    name: "auth_token",
    value: process.env.AUTH_TOKEN,
  });

  await page.goto(userURL, {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector(`article[data-testid="tweet"]`);

  const today = datetime;
  let moreContentUrlList = [];
  let tweetList = [];
  let newlastTime = today;
  while (today <= newlastTime) {
    await page.evaluate(async () => {
      await new Promise((resove) => {
        const distance = 100;
        let times = 0;
        const stopTimes = 10;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          times += 1;
          if (times === stopTimes) {
            clearInterval(timer);
            resove();
          }
        }, 100);
      });
    });
    const { tweet, lastDate, moreContentURL } = await page.evaluate(
      (today, peopelLook) => {
        let moreContentURL = [];
        let tweet = [];
        let lastDate = "0";
        document
          .querySelectorAll(
            `div[class="css-175oi2r r-1iusvr4 r-16y2uox r-1777fci r-kzbkwu"]`
          )
          .forEach(function (value) {
            const articleElement = value.querySelector(
              `div[class="css-175oi2r"] div[data-testid="tweetText"]`
            );
            const hrefElement = value.querySelector(
              `div[class="css-175oi2r r-18u37iz r-1q142lx"] a[dir="ltr"]`
            );
            const dateElement = value.querySelector(
              `div[class="css-175oi2r r-18u37iz r-1q142lx"] a[dir="ltr"] time`
            );
            const tweetUnderElement = value.querySelectorAll(
              `div[class="css-175oi2r"] div[class="css-175oi2r r-1kbdv8c r-18u37iz r-1wtj0ep r-1ye8kvj r-1s2bzr4"] div[class="css-175oi2r r-18u37iz r-1h0z5md r-13awgt0"]`
            );
            const analyticsElement = tweetUnderElement[3].querySelector(
              `span[class="css-1qaijid r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0 r-1k6nrdp r-s1qlax"] span[class="css-1qaijid r-bcqeeo r-qvutc0 r-poiln3"]`
            );

            if (
              hrefElement == null ||
              dateElement == null ||
              articleElement == null
            ) {
              return;
            }
            const moreArticleDivElement = articleElement.querySelector(
              `div[class="css-175oi2r"] div[data-testid="tweet-text-show-more-link"]`
            );
            const moreArticleATagElement = articleElement.querySelector(
              `div[class="css-175oi2r"] a[data-testid="tweet-text-show-more-link"]`
            );

            const content = articleElement.innerText;
            const url = hrefElement.href;
            const date = dateElement.getAttribute("datetime").substring(0, 10);
            const analyticsString = analyticsElement.innerText;
            const analyticsNum = analyticsString.includes("萬")
              ? parseFloat(analyticsString.replace("萬", "")) * 10000
              : parseInt(analyticsString.replace(",", ""), 10);

            if (date > lastDate) {
              lastDate = date;
            }

            if (date !== today || analyticsNum < peopelLook) {
              return;
            }
            if (moreArticleDivElement || moreArticleATagElement) {
              moreContentURL.push(url);
              tweet.push({ url, analyticsNum });
            } else {
              tweet.push({ url, analyticsNum, content });
            }
          });
        return { tweet, lastDate, moreContentURL };
      },
      today,
      peopelLook
    );
    moreContentUrlList.push(...moreContentURL);
    tweetList.push(...tweet);
    newlastTime = lastDate;
  }

  //清除重複貼文和處理過長內容的連結
  const moreContentUrlResult = moreContentUrlList.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
  const result = [
    ...new Set(tweetList.map((item) => JSON.stringify(item))),
  ].map((item) => JSON.parse(item));

  if (moreContentUrlResult.length > 0) {
    await Promise.all(
      moreContentUrlResult.map(async (url) => {
        let page = await browser.newPage();
        await page.goto(url, {
          waitUntil: "networkidle2",
        });

        await page.waitForSelector(`article[data-testid="tweet"]`);

        const content = await page.$eval(
          `div[class="css-175oi2r"] div[data-testid="tweetText"]`,
          (els) => {
            return els.innerText;
          }
        );

        result.map((item) => {
          if (item.url === url) {
            item.content = content;
          }
        });

        await page.close();
      })
    );
  }

  await page.close();
  await browser.close();

  return result;
}
