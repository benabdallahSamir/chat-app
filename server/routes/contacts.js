import express from "express";
import { getMyContact } from "../controllers/contacts.js";
import { isLoggedIn } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", isLoggedIn, getMyContact);

export default router;
