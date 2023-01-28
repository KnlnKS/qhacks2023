import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";

import loginWithGoogle from "./loginWithGoogle";

export default function GoogleButton() {
  return (
    <Center>
      <Button
        w={"full"}
        maxW={"md"}
        color={"black"}
        leftIcon={<FcGoogle />}
        onClick={loginWithGoogle}
        border={"0"}
      >
        <Text>Sign in with Google</Text>
      </Button>
    </Center>
  );
}
