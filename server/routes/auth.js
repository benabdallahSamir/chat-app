import express from "express";
import { register, login, isLoggedIn } from "../controllers/auth.js";

const router = express.Router();

router.post("/auth/signup", register);
router.post("/auth/login", login);
router.get("/isLoggedIn", isLoggedIn);

export default router;
