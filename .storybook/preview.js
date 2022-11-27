import React from 'react';
import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/styles/global.style";
import { ThemeProvider } from 'styled-components';
import theme from "../src/styles/theme";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
addDecorator((story)=>(
  <ThemeProvider theme={theme}>{story()}</ThemeProvider>
))
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}