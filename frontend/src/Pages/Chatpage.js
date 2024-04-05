import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => {
        return <div key={chat._id}> {chat.chatName} </div>;
      })}
    </div>
  );
};

export default Chatpage;