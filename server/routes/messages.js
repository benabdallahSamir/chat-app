import express from "express";
import { addMessage, getMessages } from "../controllers/messages.js";
import { isLogedIn } from "../middlewares/jwt.js";

const router = express.Router();

router.post("/:userId", isLogedIn, addMessage);

router.get("/:userId", isLogedIn, getMessages);

export default router;
