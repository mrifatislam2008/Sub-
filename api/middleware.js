import jwt from "jsonwebtoken";

export function verify(req) {
  try {
    const token = req.headers.authorization;
    if (!token) return false;
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}
