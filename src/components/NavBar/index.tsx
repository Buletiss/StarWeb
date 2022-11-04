import { Flex, Image, Box, Input, Text } from '@chakra-ui/react';
import SpaceStar from '../../../public/spaceStar.png';

export const Navbar = () => {
  return (
    <Flex
      backgroundImage="url(/spaceStar.png)"
      justifyContent="space-between"
      align="center"
      height="4rem"
    >
      <Flex marginLeft="1rem">
        <Text color="white">LOGO</Text>
        <Text color="white">LOGO</Text>
        <Text color="white">LOGO</Text>
      </Flex>
      <Box>
        <Text color="white">LOGO</Text>
      </Box>
      <Box>
        <Input></Input>
      </Box>
    </Flex>
  );
};
