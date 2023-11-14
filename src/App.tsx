import { Grid, GridItem, Show } from "@chakra-ui/react";
import Profile from "./components/Profile";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"user user" "tab tab" "main main"`,
        lg: `"user profile" "chat main"`,
      }}
    >
      <GridItem area="user" >
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

        <GridItem area="profile" >
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
