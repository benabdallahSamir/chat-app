import jwt from "jsonwebtoken";

function setToken(res, userId) {
  const token = jwt.sign({ userId: userId }, process.env.SECRET_KEY, {
    expiresIn: "10h",
  });
  res.cookie("token", token, { httpOnly: true, secure: true });
}

export default setToken;
