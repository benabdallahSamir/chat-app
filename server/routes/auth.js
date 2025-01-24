import express from "express";
import { register, login, isLoggedIn } from "../controllers/auth.js";
import { isLoggedIn as verify } from "../middlewares/jwt.js";
const router = express.Router();

router.post("/signup", register);
router.post("/login", login);
router.get("/isLoggedIn", verify , isLoggedIn);

export default router;
