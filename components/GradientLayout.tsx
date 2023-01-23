import { Box, Flex, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GradientLayoutProps {
  color: string;
  children: ReactNode;
  image: string;
  subtitle: string;
  title: string;
  description: string;
  roundImage: boolean;
}

const GradientLayout = (props: GradientLayoutProps) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${props.color}.500 0%, ${props.color}.600 15%, ${props.color}.700 40%, rgba(0,0,0,0.95) 75%)`}
    >
      <Flex bg={`${props.color}.600`} padding="40px" align="end">
        <Box padding="20px">
          <Image
            boxSize="160px"
            boxShadow="2xl"
            src={props.image}
            borderRadius={props.roundImage ? "100%" : "3px"}
          />
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {props.subtitle}
          </Text>
          <Text fontSize="6xl">{props.title}</Text>
          <Text fontSize="x-small">{props.description}</Text>
        </Box>
      </Flex>
      <Box paddingY="50px">{props.children}</Box>
    </Box>
  );
};

export default GradientLayout;
