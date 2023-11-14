import { Grid, GridItem, HStack, Show, Text } from "@chakra-ui/react";
import Profile from "./components/Profile";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "user user" "tab tab" "main main"`,
        lg: `"nav nav" "user profile" "chat main"`,
      }}
    >
      <GridItem area="nav">
        <HStack justifyContent="space-between" padding='10px'>
          <Text fontSize='3xl' >Muzz</Text>
          <ColorModeSwitch />
        </HStack>
      </GridItem>
      <GridItem area="user">
        <Profile />
      </GridItem>
      <Show below="lg">
        <GridItem area="tab" bg="yellow">
          tab
        </GridItem>
      </Show>

      <Show above="lg">
        <GridItem area="chat" bg="purple">
          chatList
        </GridItem>

        <GridItem area="profile">
          <Profile />
        </GridItem>
      </Show>

      <GridItem area="main" bg="grey">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
