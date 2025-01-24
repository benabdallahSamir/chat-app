import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import { setToken } from "../middlewares/jwt.js";
import { handleUser } from "../middlewares/auth.js";

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).send({ message: "User already exists" });
    // GENERATE USERNAME
    const username = email.split("@")[0];
    const generateUsername = username;
    let usernameExists = await User.findOne({ generateUsername });
    while (usernameExists) {
      const random = Math.floor(Math.random() * 1000);
      generateUsername = username + random;
      usernameExists = await User.findOne({ generateUsername });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    setToken(res, newUser._id);

    res.status(201).send({ user: handleUser(newUser) });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};
export const isLogged = (req, res, next) => {
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    // HANDLE CHECK IF TOKEN IS VALID
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send({ message: "Invalid user" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ message: "Invalid user" });

    setToken(res, user._id);

    res.status(200).send({ user: handleUser(user) });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server error" });
  }
};

export const isLoggedIn = (req, res) => {
  try {
    const { user } = req;
    res.status(200).send(user);
  } catch (error) {
    return res.status(401).send({ message: "Token is not valid" });
  }
};
