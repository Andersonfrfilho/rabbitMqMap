import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function
import { Fonts } from "@styles/Fonts.style";
import { theme } from "@styles/theme";

// 2. Extend the theme to include custom colors, fonts, etc

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
