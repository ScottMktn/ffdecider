import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <Container maxW="8xl">
      <NavBar />
      <main style={{ height: "1000px", marginTop: "80px" }}>{children}</main>
      <Footer />
    </Container>
  );
}
