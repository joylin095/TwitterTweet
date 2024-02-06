import GetTweet from "./getTweet.js";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/getTweet", async (req, res) => {
  const filters = req.body;
  const result = await GetTweet(filters);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
