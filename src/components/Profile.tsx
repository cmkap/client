import { HStack, Image, Button, Box, Text } from "@chakra-ui/react";

interface Props {
    size?: string 
    subTitle?: boolean 
}

const Profile = ({ size = "60px", subTitle }: Props) => {
  return (
    <HStack>
      <Image
        boxSize={size}
        borderRadius="full"
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Box>
        <Button
          whiteSpace="normal"
          textAlign="left"
          fontWeight={"bold"}
          onClick={() => console.log("clicked")}
          fontSize="large"
          variant="link"
        >
          Dan Abramov
        </Button>
        {subTitle && <Text>Expires in 20 minutes</Text>}
      </Box>
    </HStack>
  );
};

{
  /* <HStack>
  <Image
    boxSize={"32px"}
    borderRadius={8}
    objectFit="cover"
    src={getCroppedImageUrl(genre.image_background)}
  />
  <Button
    whiteSpace="normal"
    textAlign="left"
    fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
    onClick={() => setGenreId(genre.id)}
    fontSize="large"
    variant="link"
  >
    {genre.name}
  </Button>
</HStack>; */
}
export default Profile;
