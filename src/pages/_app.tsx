import 'ui/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { AppContainer } from "ui/styles/pages/_app.styles";
import Header from "ui/components/surfaces/Header/Header"
import { AppThemeProvider } from 'contexts/ThemeContext'



function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <AppThemeProvider>
        <AppContainer>
          <Header />
          <Component {...pageProps} />
        </AppContainer>
      </AppThemeProvider>
    </>
  )
}

export default MyApp
