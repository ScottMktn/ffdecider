import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { FaShippingFast } from "react-icons/fa";

const UnfinishedPage = () => {
  return (
    <Center h="80vh">
      <Container maxW="80vw" centerContent>
        <Heading mb={4}>Page Under Construction</Heading>
        <Text fontSize="xl">
          Thank you for your patience while our team gets this up and running
        </Text>
        <Link href="/" style={{ textDecoration: "none" }}>
          <Button
            size="lg"
            color="white"
            bg="blue.500"
            mt="64px"
            _hover={{ bg: "blue.300" }}
          >
            Back to Home page
          </Button>
        </Link>
      </Container>
    </Center>
  );
};

export default UnfinishedPage;
