# 這是一個可以查看 Twitter 使用者文章

可以輸入 user 和日期跟推文曝光度的篩選，來作文章排序

使用 React、tailwind 開發

## Getting Started

如要在本地端執行，分支有 localhost 版本  
**(localhost 已停止更新...)**

1. 在 server 資料夾新增.env 檔案並填入 twitter 的 auth_token  
   F12 => Application => Cookies => auth_token

2. 先開啟用來爬 twitter 的 server

   ```bash
   cd server
   node server.js
   ```

3. 回到根目錄開啟 react 開發伺服器
   ```bash
   cd twittertweet
   npm start
   ```

## Website

<https://twitter-tweet.vercel.app/>  
因為使用免費 server，一次查詢 9 個使用者大約花費 10 分鐘。  
目前如有發生錯誤，網站會爛掉。

![擷取1](https://github.com/joylin095/TwitterTweet/assets/126546487/6d9f338b-e18b-470b-b9d9-04622c617984)

![擷取](https://github.com/joylin095/TwitterTweet/assets/126546487/b746bd9a-8792-4707-bb81-d3dc5f2cfde5)
