import express from "express";
import { addMessage, getMessages } from "../controllers/messages.js";
import { isLoggedIn } from "../middlewares/jwt.js";

const router = express.Router();

router.post("/:userId", isLoggedIn, addMessage);

router.get("/:userId", isLoggedIn, getMessages);

export default router;
