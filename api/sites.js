import { verify } from "./middleware.js";
import { store } from "./store.js";

export default async function handler(req, res) {
  if (!verify(req)) return res.status(401).json({ error: "Unauthorized" });

  res.json(store);
}
