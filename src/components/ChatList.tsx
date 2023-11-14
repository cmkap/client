import { Text, List, ListItem } from "@chakra-ui/react";
import Profile from "./Profile";

const userMatches = [
  { id: "1", name: "Dan", image: "https://bit.ly/dan-abramov" },
  { id: "2", name: "Dan2", image: "https://bit.ly/dan-abramov" },
  { id: "3", name: "Dan3", image: "https://bit.ly/dan-abramov" },
  { id: "4", name: "Dan4", image: "https://bit.ly/dan-abramov" },
  { id: "5", name: "Dan5", image: "https://bit.ly/dan-abramov" },
];

const ChatList = () => {
  return (
    <>
      <Text as={'b'}>Conversations</Text>
      <List>
        {userMatches.map((userMatch) => (
          <ListItem key={userMatch.id} paddingY='5px'>
            <Profile size={"40px"} subTitle={true}/>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ChatList;
