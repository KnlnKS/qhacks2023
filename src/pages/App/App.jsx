import { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Text,
  Box,
  Center,
  Divider,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FcAudioFile } from "react-icons/fc";

import { useSession } from "../../hooks";
import GlassCard from "../../components/GlassCard";
import handleFileUpload from "./handleFileUpload";

function App() {
  const session = useSession();
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <Center h={"calc(100vh)"}>
        <Stack h={"100%"} w={"100%"} direction={{ base: "row" }}>
          <Flex flex={3} h={"100%"}>
            <Center h={"100%"} w={"100%"}>
              <GlassCard p={"5"} h={"90%"} w={"90%"}>
                <Heading>🎓 LectureBites</Heading>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Button
                    bg="gray.700"
                    color={"gray.200"}
                    _hover={{ bg: "blue.600" }}
                  >
                    🎓 LectureBites
                  </Button>
                  <Box display="flex"></Box>
                </Flex>

                <Divider py={"5"} />

                <Box color="white">
                  <Text>Upload/Record Audio to see documents</Text>
                </Box>
              </GlassCard>
            </Center>
          </Flex>
          <Flex flex={1} justify={"center"}>
            <Center h={"100%"} w={"100%"}>
              <Box h={"90%"} w={"100%"}>
                <GlassCard p={"5"} w={"90%"}>
                  <FormControl id="title" pb={"2"}>
                    <FormLabel>
                      <Heading as="h5" size="sm">
                        Add a New Note
                      </Heading>
                    </FormLabel>
                    <Input
                      type="text"
                      bg="gray.700"
                      color={"gray.200"}
                      border={"0px"}
                      onChange={(e) => setTitle(e)}
                    />
                  </FormControl>

                  <Button
                    disabled={title.length < 5}
                    leftIcon={<FcAudioFile />}
                    bg="gray.700"
                    color={"gray.200"}
                    _hover={title.length < 5 ? { bg: "blue.600" } : {}}
                  >
                    <label>
                      Upload Audio
                      <input
                        disabled={title.length < 5}
                        name="resume"
                        tabIndex="-1"
                        type="file"
                        onChange={(e) => handleFileUpload(session)(e)}
                      />
                    </label>
                  </Button>
                </GlassCard>
              </Box>
            </Center>
          </Flex>
        </Stack>
      </Center>
    </div>
  );
}

export default App;
