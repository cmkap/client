import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"user user" "chat profile" "main main"`,
        lg: `"user profile" "chat main"`,
      }}
    >
      <GridItem area="user" bg="green">
        user
      </GridItem>

      <GridItem area="chat" bg="purple">
        chat
      </GridItem>

      <GridItem area="profile" bg="coral">
        profile
      </GridItem>

      <GridItem area="main" bg="grey">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
