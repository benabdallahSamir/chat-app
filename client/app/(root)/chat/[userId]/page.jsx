"use client";
import { addMessage, getMessages } from "@/api/messages";
import ChatPageLoader from "@/components/ChatPageLoader";
import { ReceivedMessage, SentMessage } from "@/components/MessageContainer";
import { User } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ChatPage = () => {
  const { userId } = useParams();
  const [messages, setMessages] = useState(null);
  const [user, setUser] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    (async () => {
      const res = await getMessages(userId);
      if (res === null) return;
      switch (res.status) {
        case 200:
          setMessages(res.data.messages);
          setUser(res.data.user);
          break;
        case 204:
          setMessages([]);
          break;
        case 401:
          console.log("Unauthorized");
          break;
        default:
          console.log("Something went wrong");
      }
    })();
  }, []);

  const handleSendMessage = async () => {
    if (!newMessage) {
      toast.error("enter message please");
      return;
    }
    const res = await addMessage(userId, newMessage);
    if (res === null) {
      toast.error("somthing went rong");
      return;
    }
    if (res.status === 201) {
      setNewMessage("");
      return;
    } else {
      toast.error(res.data);
    }
  };
  if (messages === null) return <ChatPageLoader />;
  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 bg-white rounded shadow">
        {messages.map(({ message, recived, id }) => (
          <div key={id} className="mb-4">
            {recived ? (
              <ReceivedMessage message={message} picture={user.picture} />
            ) : (
              <SentMessage message={message} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
