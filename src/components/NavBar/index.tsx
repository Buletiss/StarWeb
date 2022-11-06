import {
  Flex,
  Image,
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  List,
  ListItem,
  Link,
  Text,
} from '@chakra-ui/react';

import { Search2Icon } from '@chakra-ui/icons';

export const Navbar = () => {
  return (
    <>
      <Flex
        backgroundImage="url(/spaceStar.png)"
        justifyContent="space-between"
        align="center"
        height="134px"
      >
        <Flex
          marginLeft="1rem"
          justifyContent="space-between"
          w="120px"
        >
          <Image
            w="25px"
            h="25px"
            src="facebook-icon.png"
            alt="facebookIcon"
          />
          <Image
            w="25px"
            h="25px"
            src="instagram-icon.png"
            alt="facebookIcon"
          />
          <Image
            w="25px"
            h="25px"
            src="twitter-icon.png"
            alt="facebookIcon"
          />
          <Image
            w="25px"
            h="25px"
            src="youtube-icon.png"
            alt="facebookIcon"
          />
        </Flex>
        <Box>
          <Image
            src="StarWars-logo.png"
            alt="starwarslogo"
            w="203px"
            h="88px"
          />
        </Box>
        <Box>
          <InputGroup size="md">
            <Input type="search" placeholder="Search Star Wars" />
            <InputRightElement>
              <Button bg="transparent" variant="link">
                <Search2Icon color="white" />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </Flex>
      <Flex
        bg="black"
        border="1px"
        borderColor="gray"
        justifyContent="center"
      >
        <List display="flex">
          <ListItem padding="4px 32px" border="1px">
            <Link bg="transparent" color="white" variant="unstyled">
              NEWS + BLOG
            </Link>
          </ListItem>
          <ListItem padding="4px 32px" border="1px">
            <Link color="white">VIDEO</Link>
          </ListItem>
          <ListItem padding="4px 32px" border="1px">
            <Link bg="transparent" color="white">
              <Text>FILMS</Text>
            </Link>
          </ListItem>
          <ListItem padding="4px 32px" border="1px">
            <Link bg="transparent" color="white">
              SERIES
            </Link>
          </ListItem>
          <ListItem padding="4px 32px" border="1px">
            <Link bg="transparent" color="white">
              INTERACTIVE
            </Link>
          </ListItem>
          <ListItem padding="4px 32px" border="1px">
            <Link bg="transparent" color="white">
              COMMUNITY
            </Link>
          </ListItem>
          <ListItem padding="4px 32px" border="1px">
            <Link bg="transparent" color="white">
              DATABANK
            </Link>
          </ListItem>
          <ListItem padding="4px 32px" border="1px">
            <Link bg="transparent" color="white">
              DISNEY+
            </Link>
          </ListItem>
        </List>
      </Flex>
    </>
  );
};
