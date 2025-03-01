import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

app.get("/api/message", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Node.js API!" });
});
