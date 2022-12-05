import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import { Fonts } from "@styles/Fonts.style";
import { theme } from "@styles/theme";
import "./styles.css"
import { ProviderStates } from "@contexts/Provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ProviderStates>
          <Fonts />
          <Component {...pageProps} />
        </ProviderStates>
      </ChakraProvider>
    </>
  );
}
