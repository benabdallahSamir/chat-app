import mongoose from "mongoose";

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    message: {
      text: { type: String, reauire: true },
    },
    users: Array,
    sender: { type: String, require: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
