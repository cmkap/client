import { Grid, GridItem, Show } from "@chakra-ui/react";
import Profile from "../components/Profile";
import ChatList from "../components/ChatList";

function ChatPage() {
  return (
    <Grid
      
      templateAreas={{
        base: `"user user" "tab tab" "main main"`,
        lg: ` "user profile" "chat main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '350px 1fr'
      }}
      
      
    >
    
      <GridItem area="user" borderWidth='1px' borderRadius='lg'>
        <Profile />
      </GridItem>
      <Show below="lg">
        <GridItem area="tab" bg="yellow" borderWidth='1px' borderRadius='lg'>
          tab
        </GridItem>
      </Show>

      <Show above="lg">
        <GridItem area="chat" bg="purple" paddingX="5px" borderWidth='1px' borderRadius='lg'>
          <ChatList />
        </GridItem>

        <GridItem area="profile" borderWidth='1px' borderRadius='lg'>
          <Profile />
        </GridItem>
      </Show>

      <GridItem area="main" bg="grey" borderWidth='1px' borderRadius='lg'>
        main
      </GridItem>
    </Grid>
  );
}

export default ChatPage;
