import Message from "../models/messages.js";
import User from "../models/User.js";
import { handleUser } from "../middlewares/auth.js";

export const addMessage = async (req, res) => {
  try {
    const { userId } = req;
    const { id, message } = req.body;
    if (!id || !message) return res.status(400).send("Bad request");

    const newMessage = await new Message({
      sender: userId,
      users: [userId, id],
      message: { text: message },
    }).save();

    if (newMessage) {
      res.status(201).send({
        message: {
          message: newMessage.message,
          recived: id === newMessage.sender,
          id: newMessage._id.toString(),
        },
      });
    } else {
      res.status(400).send("Message could not be sent");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
export const getMessages = async (req, res) => {
  try {
    const { userId: from } = req;
    const { userId: paramsId } = req.params;
    if (!from || !paramsId) {
      return res.status(400).send("Bad request");
    }
    const user = await User.findById(paramsId);
    if (!user) return res.status(404).send("user not found");
    const messages = await Message.find({
      users: { $all: [from, paramsId] },
    });

    if (messages.length === 0)
      return res.status(404).send("conversation not found");

    const handleMessages = messages.map((message) => ({
      message: message.message,
      recived: paramsId === message.sender,
      id: message._id.toString(),
    }));
    res.status(200).send({ messages: handleMessages, user: handleUser(user) });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
