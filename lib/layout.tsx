import React, { FunctionComponent } from 'react';
import Head from 'next/head';
import { StateProvider, initialState } from '../lib/state';
import reducer from '../reducers';

type LayoutProps = {
  title?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <StateProvider initialState={initialState} reducer={reducer}>
      {children}
    </StateProvider>
  </>
);
export default Layout;
