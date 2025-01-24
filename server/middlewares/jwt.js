import jwt from "jsonwebtoken";
import User from "../models/User.js";

function setToken(res, userId) {
  const token = jwt.sign({ userId: userId }, process.env.SECRET_KEY, {
    expiresIn: "10h",
  });
  res.cookie("token", token, { httpOnly: true, secure: true });
}

async function isLoggedIn(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    const userId = verified.userId;
    const user = await User.findById(userId);
    if (!user) return res.status(401).send("user not found please login");
    req.userId = userId;
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}

export { setToken, isLoggedIn };
