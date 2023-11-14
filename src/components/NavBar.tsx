import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Text fontSize="3xl" as="b">
        Muzz
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
