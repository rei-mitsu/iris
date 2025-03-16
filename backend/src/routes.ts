import express, { Request, Response } from "express";
const router = express.Router();

router.get("/api/message", (_req: Request, res: Response) => {
  res.json({ message: "Hello from Node.js API!" });
});

export default router;
