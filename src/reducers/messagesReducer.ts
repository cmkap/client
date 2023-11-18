export interface Message {
  to: string
  from: string
  content: string
  timeStamp: number
}

interface AddMessage {
  type: "ADD";
  message: Message
}

type MessageAction = AddMessage



const messagesReducer = (messages: Message[], action: MessageAction): Message[] => {
  switch(action.type) {
    case 'ADD':
      return [ action.message, ...messages]
  }
};

export default messagesReducer;
