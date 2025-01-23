import express from "express";
import auth from "./auth.js";
import messages from "./messages.js";
import contacts from "./contacts.js";
const router = express.Router();

router.use("/auth", auth);
router.use("/messages", messages);
router.use("/contacts", contacts);
export default router;
