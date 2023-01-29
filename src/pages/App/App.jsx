import { useEffect, useState } from "react";
import { Button, Flex, Text, Box, Center, Divider } from "@chakra-ui/react";
import { FcAudioFile } from "react-icons/fc";

import { useSession } from "../../hooks";
import GlassCard from "../../components/GlassCard";
import handleFileUpload from "./handleFileUpload";

function App() {
  const session = useSession();

  return (
    <div className="App">
      <Center h={"calc(100vh)"}>
        <Box h={"90%"} w={"90%"}>
          <Center h={"100%"}>
            <GlassCard p={"5"} h={"100%"} w={"100%"}>
              <Flex alignItems={"center"} justifyContent={"space-between"}>
                <Button
                  bg="gray.700"
                  color={"gray.200"}
                  _hover={{ bg: "blue.600" }}
                >
                  🎓 LectureBites
                </Button>
                <Box display="flex">
                  <Button
                    leftIcon={<FcAudioFile />}
                    bg="gray.700"
                    color={"gray.200"}
                    _hover={{ bg: "blue.600" }}
                  >
                    <label>
                      Upload Audio
                      <input
                        name="resume"
                        tabIndex="-1"
                        type="file"
                        onChange={(e) => handleFileUpload(session)(e)}
                      />
                    </label>
                  </Button>

                  {/*
                  <Button
                    w={"full"}
                    maxW={"md"}
                    leftIcon={<HiMicrophone />}
                    bg="gray.700"
                    color={"gray.200"}
                    _hover={{ bg: "blue.600" }}
                  >
                    <Text>Record Audio</Text>
                  </Button>*/}
                </Box>
              </Flex>

              <Divider py={"5"}/>

              <Box color="white">
                <Text>Upload/Record Audio to see documents</Text>
              </Box>
            </GlassCard>
          </Center>
        </Box>
      </Center>
    </div>
  );
}

export default App;
