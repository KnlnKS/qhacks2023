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
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import {
  FcAudioFile,
  FcDocument,
  FcSearch,
  FcEmptyTrash,
  FcVoicemail,
} from "react-icons/fc";

import { useSession } from "../../hooks";
import { databases } from "../../config/appwrite";
import GlassCard from "../../components/GlassCard";
import handleFileUpload from "./handleFileUpload";
import handleSearch from "./handleSearch";

function App() {
  const session = useSession();
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    databases
      .listDocuments("63d5c4c702e04b3042a8", "63d5e58db550c87c6e57")
      .then((response) => setDocs(response?.documents || []));
  }, []);

  return (
    <div className="App">
      <Center h={"calc(100vh)"}>
        <Stack h={"100%"} w={"100%"} direction={{ base: "row" }}>
          <Flex flex={3} h={"100%"}>
            <Center h={"100%"} w={"100%"}>
              <GlassCard p={"5"} h={"90%"} w={"90%"}>
                <Heading color="white">🎓 LectureBites</Heading>

                <InputGroup size="md" mt={"5"} color={"white"}>
                  <Input
                    pr="4.5rem"
                    type={"text"}
                    placeholder="Ask me a question!"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Search database"
                      icon={<FcSearch />}
                      onClick={() => handleSearch(query, docs)}
                    />
                  </InputRightElement>
                </InputGroup>

                <Divider my={"5"} />

                <Stack spacing={4}>
                  {docs.map((doc) => (
                    <a
                      href={`https://docs.google.com/document/d/${doc?.document_id}`}
                      key={doc?.document_id}
                    >
                      <Button
                        as="a"
                        w={"75%"}
                        mr={"1"}
                        leftIcon={<FcDocument />}
                        justifyContent="flex-start"
                      >
                        {doc?.title}
                      </Button>

                      <IconButton
                        colorScheme="red"
                        aria-label="Delete"
                        icon={<FcEmptyTrash />}
                        onClick={() => {
                          databases
                            .deleteDocument(
                              "63d5c4c702e04b3042a8",
                              "63d5e58db550c87c6e57",
                              doc?.$id
                            )
                            .then(() => window.location.reload());
                        }}
                      />
                    </a>
                  ))}
                </Stack>

                {docs.length < 1 && (
                  <Box color="white">
                    <Text>Upload/Record Audio to see documents</Text>
                  </Box>
                )}
              </GlassCard>
            </Center>
          </Flex>
          <Flex flex={1} justify={"center"}>
            <Center h={"100%"} w={"100%"}>
              <Box h={"90%"} w={"100%"}>
                <GlassCard p={"5"} w={"90%"}>
                  <FormControl id="title" pb={"2"}>
                    <FormLabel>
                      <Heading as="h5" size="sm" color={"white"}>
                        Add a New Note
                      </Heading>
                    </FormLabel>
                    <Input
                      type="text"
                      color={"white"}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormControl>
                  <Flex justify={"space-between"}>
                    <Button
                      isLoading={isUploading}
                      loadingText="Uploading"
                      isDisabled={title.length < 5}
                      leftIcon={<FcAudioFile />}
                    >
                      <label>
                        Upload Audio
                        <input
                          disabled={title.length < 5}
                          name="resume"
                          tabIndex="-1"
                          type="file"
                          onChange={(e) =>
                            handleFileUpload(session)(e, title, setIsUploading)
                          }
                        />
                      </label>
                    </Button>

                    <Button
                      isLoading={isUploading}
                      loadingText="Uploading"
                      isDisabled={title.length < 5}
                      leftIcon={<FcVoicemail />}
                    >
                      <label>
                        Record Audio
                        <input
                          disabled={title.length < 5}
                          name="resume"
                          tabIndex="-1"
                          type="file"
                          onChange={(e) =>
                            handleFileUpload(session)(e, title, setIsUploading)
                          }
                        />
                      </label>
                    </Button>
                  </Flex>
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
