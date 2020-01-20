import React from "react";
import withData from "../lib/apollo";
import Header from "./Header";

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

export default withData(({ children }) => <Layout>{children}</Layout>);
