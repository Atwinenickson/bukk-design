import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { theme } from '../theme';
import createEmotionCache from '../utils/createEmotionCache';

import { store } from '../store'
import { Provider } from 'react-redux'


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <Provider store={store}>
    <CacheProvider value={emotionCache}>
      <Head>
      <title>
         GETBUKK DESIGN
        </title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
       
        {getLayout(<Component {...pageProps} />)}
       
      </ThemeProvider>
      {/* </LocalizationProvider> */}
    </CacheProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};