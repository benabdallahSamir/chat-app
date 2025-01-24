import express from "express";
import { register, login, isLoggedIn } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/isLoggedIn", isLoggedIn);

export default router;
