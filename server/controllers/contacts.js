import Message from "../models/messages.js";
import User from "../models/User.js";
import { handleUser } from "../middlewares/auth.js";
export const getMyContact = async (req, res) => {
  try {
    const userId = req.userId;
    const messages = await Message.find({ users: { $in: [userId] } });
    if (!messages || messages.length === 0) return res.status(204).send();
    const usersId = new Set(
      messages.map(({ users }) => users.find((id) => id !== userId))
    );
    let users = await Promise.all(
      Array.from(usersId).map((id) => User.findById(id))
    );
    users = users.map((user) => handleUser(user));
    res.status(200).send({ users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
