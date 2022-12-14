import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    logoType: 'Rotis II Sans Pro Light',
    heading: "Open Sans",
    body: "Raleway",
  },
  colors :{
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  }
})