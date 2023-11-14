import { HStack, Image, Button } from "@chakra-ui/react";

const Profile = () => {
  return (
    <HStack>
      <Image
        boxSize={"60px"}
        borderRadius="full"
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
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
