import jwt from "jsonwebtoken";

function setToken(res, userId) {
  const token = jwt.sign({ userId: userId }, process.env.SECRET_KEY, {
    expiresIn: "10h",
  });
  res.cookie("token", token, { httpOnly: true, secure: true });
}

function isLoggedIn(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("Access Denied");
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = verified.userId;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
}

export { setToken, isLoggedIn };
