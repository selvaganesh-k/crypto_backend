import express, { type Request, type Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/coins", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 50,
        page: 1,
        sparkline: false,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching crypto data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
