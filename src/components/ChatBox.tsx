import { Button, HStack, Input } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useContext, useReducer } from "react";
import * as Yup from "yup";
import { MatchContext } from "../pages/ChatPage";
import socket from "../socket";
import messagesReducer from "../reducers/messagesReducer";

interface Message {
  to: string;
  from: string;
  content: string;
  time: number;
}

const ChatBox = () => {
  const { setMessages, user, dispatch } = useContext(MatchContext);


  const receiver = user.id !== "john" ? "john" : "jane";

  return (
    <Formik
      initialValues={{ message: "" }}
      validationSchema={Yup.object({
        message: Yup.string().min(1).max(255),
      })}
      onSubmit={(values, actions) => {
        const message = {
          to: receiver,
          from: user.id,
          content: values.message,
          timeStamp: Date.now(),
        };

        socket.emit("sendMessage", { ...message, recipientId: receiver });
        dispatch({type: "ADD", message})

        // setMessages((prevMessages: Message[]) => [message, ...prevMessages]);
        actions.resetForm();
      }}
    >
      <HStack as={Form} w="100%" pb="1rem" px="1rem">
        <Input
          as={Field}
          name="message"
          placeholder="Type message here..."
          size="lg"
          autoComplete="off"
        />
        <Button type="submit" size="lg" colorScheme="gray">
          Send
        </Button>
      </HStack>
    </Formik>
  );
};

export default ChatBox;
