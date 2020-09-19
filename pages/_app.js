import App from "next/app";
import { Head } from "next/document";
import { ThemeProvider } from "styled-components";

import { themeDark } from "../theme/theme";
import GlobalStyles from "../theme/globalStyles";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={themeDark}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
