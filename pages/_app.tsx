import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import withApollo from '../hooks/withApollo';
import { StateProvider, initialState } from '../lib/state';
import reducer from '../reducers';

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: '#001F3F',
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  * {
    font-family: 'Arial';
    margin: 0px;
  }
  body {
    margin: 0 auto;
    background-color: #f8f5f5;
    color: ${props => props.theme.niceBlack}; 
  }
`;

// since "apollo" isn't a native Next.js prop we have to declare it's type.
interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Sök vecka</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ApolloProvider client={apollo}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <StateProvider initialState={initialState} reducer={reducer}>
              <Component {...pageProps} />
            </StateProvider>
          </ThemeProvider>
        </ApolloProvider>
      </React.Fragment>
    );
  }
}

export default withApollo(MyApp);
