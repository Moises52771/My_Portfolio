import 'ui/styles/globals.css'
import type { AppProps } from 'next/app'
import theme from "ui/styles/themes/theme";
import { ThemeProvider } from "@mui/material"
import Head from 'next/head';
import { AppContainer } from "ui/styles/pages/_app.styles";
import Header from "ui/components/surfaces/Header/Header"


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
        </AppContainer>
      </ThemeProvider>
    </>
  )
}

export default MyApp
