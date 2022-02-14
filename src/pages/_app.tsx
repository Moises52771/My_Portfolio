import 'ui/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { AppContainer, BoxSwitch, WiDaySunnyStyled, FaMoonStyled } from "ui/styles/pages/_app.styles";
import Header from "ui/components/surfaces/Header/Header"
import { AppThemeProvider, useAppThemeContext } from 'contexts/ThemeContext'



function MyApp({ Component, pageProps }: AppProps) {
  const { toggleTheme, icon } = useAppThemeContext();

  return(
    <>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <AppThemeProvider>
        <AppContainer>
          <Header />
          <BoxSwitch onClick={toggleTheme}>
            
          </BoxSwitch>
          <Component {...pageProps} />
        </AppContainer>
      </AppThemeProvider>
    </>
  )
}

export default MyApp
