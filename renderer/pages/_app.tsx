import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import { AuthContextProvider } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>chat-app</title>
      </Head>

      <AuthContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
