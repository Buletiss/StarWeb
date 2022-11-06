import { Flex, Box, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/NavBar';
import api from '../services/api';

interface Character {
  name: string;
  gender: string;
}

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function getPersonInfor() {
      const response = await api.get('/people');
      setCharacters(response.data.results);
    }
    getPersonInfor();
  }, []);
  return (
    <>
      <Flex flexDirection="column" backgroundImage="url(/spaceStar.png)">
        <Navbar />
        <Flex justifyContent="center">
          <Flex flexDirection="row" flexWrap="wrap" w="80%">
            {characters.map((character, index) => (
              <Flex key={index} w="20%" margin="35px 25px 20px 25px">
                <Box w="100%" h="350px" border="1px" borderColor="white" color="white">
                  <Text>{character.name}</Text>
                  <Text>{character.gender}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
