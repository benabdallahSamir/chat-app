import express from "express";
import { getMyContact } from "../controllers/contacts.js";
import { isLogedIn } from "../middlewares/jwt.js";

const router = express.Router();

router.get("/", isLogedIn, getMyContact);

export default router;
