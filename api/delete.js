import { verify } from "./middleware.js";
import { store } from "./store.js";

export default async function handler(req, res) {
  if (!verify(req)) return res.status(401).json({ error: "Unauthorized" });

  let body = req.body;
  if (typeof body === "string") body = JSON.parse(body || "{}");

  delete store[body.name];

  res.json({ success: true });
}
