import { useEffect, useState, useCallback, useReducer } from "react";
import socket from "../socket";
import  { Message } from "../reducers/messagesReducer";

const useSocketSetup = (user, dispatch) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  
  const handleMessage = useCallback((msg: Message) => {
    dispatch({ type: "ADD", message: { ...msg } });
  }, []);
  useEffect(() => {
    socket.connect();
    socket.emit("addNewUser", user?.id);
    socket.on("getOnlineUsers", (res) => {
      setOnlineUsers([...onlineUsers, ...res]);
    });

    socket.on("connect_error", () => {
      // logout user
      console.log("logout");
    });
    return () => {
      socket.off("getOnlineUsers");
      socket.off("connect_error");
    };
  }, [user]);

  useEffect(() => {
    if (socket === null) return;

    socket.on("getMessage", handleMessage);

    // socket.emit("sendMessage", {...newMessage, recipientId})

    return () => socket.off("getMessage");
  }, []);

  return onlineUsers;
};

export default useSocketSetup;
