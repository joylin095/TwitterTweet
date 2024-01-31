const express = require("express");
const cors = require("cors");
const puppeteer = require("puppeteer");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/getTweet", async (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
