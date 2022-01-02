import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import Layout from "../layout/Layout";
import { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </UserProvider>
  );
}

export default MyApp;
