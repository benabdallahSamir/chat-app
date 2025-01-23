import { User } from "lucide-react";
import React from "react";

export const SentMessage = ({ message, picture }) => {
  return (
    <div className="border boder-gray-200 p-2 rounded-lg self-end mb-2 flex items-center flex-row-reverse">
      {picture ? <img src={picture} alt="fr" /> : <User size={24} />}
      <div className="mr-3">{message.text}</div>
    </div>
  );
};

export const ReceivedMessage = ({ message, picture }) => {
  return (
    <div className="border boder-gray-200 p-2 rounded-lg self-start mb-2 flex items-center">
      {picture ? <img src={picture} alt="fr" /> : <User size={24} />}
      <div className="ml-3">{message.text}</div>
    </div>
  );
};
