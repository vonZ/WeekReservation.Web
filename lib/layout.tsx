import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title || ''}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <style jsx global>{`
      * {
        font-family: 'Arial';
        margin: 0px;
      }
      body {
        background-color: #f8f5f5;
      }
      input {
        -webkit-appearance: none;
        background-color: #fff;
        border-radius: 6px;
        border: 1px solid #d3dde6;
        color: #0e3254;
        display: block;
        width: 100%;
        font-family: inherit;
        font-size: 1rem;
        height: 42px;
        outline: none;
        padding: 0 12px;
        transition: border-color 0.2s;
      }
    `}</style>
  </>
);
export default Layout;
