import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import withApollo from '../hooks/withApollo';
import { GlobalStyle } from '../static/globalStyle';
import { GlobalProvider } from '../context/globalContext';
import '../static/global.scss';
import '../static/react-nice-dates.scss';

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: '#001F3F',
};

// since "apollo" isn't a native Next.js prop we have to declare it's type.
interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <>
        <Head>
          <title>Sök vecka</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:300,400,700,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <GlobalProvider>
              <Component {...pageProps} />
            </GlobalProvider>
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
