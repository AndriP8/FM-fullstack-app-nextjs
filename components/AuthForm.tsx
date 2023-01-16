import { Box, Button, Flex, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { auth } from "../lib/mutation";

interface AuthFormProps {
  mode: "signin" | "signup";
}

const AuthForm = (props: AuthFormProps) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    await auth(props.mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <Box height="100vh" width="100vw" bg="black" color="white">
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100px"
        borderBottom="1px"
      >
        <Image src="/logo.svg" height="60" width="120" alt="logo" />
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        height="cal(100vh - 100px)"
        paddingTop="16"
      >
        <Box padding="50px" bg="gray.900" borderRadius="6px">
          <form onSubmit={(e) => handleSubmit(e)}>
            <Input
              marginY="2"
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              marginY="2"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              bg="green.500"
              isLoading={isLoading}
              _hover={{ bg: "green.300" }}
            >
              {props.mode}
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthForm;
