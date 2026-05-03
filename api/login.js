import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  let body = req.body;

  if (typeof body === "string") body = JSON.parse(body || "{}");

  const password = body?.password;

  if (password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign(
      { admin: true },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({ success: true, token });
  }

  return res.json({ success: false });
}
