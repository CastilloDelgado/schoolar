import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../assets/styles/components/Layout.scss'

const Layout = ({children}) => (
  <div className="container">
    <Header />
        {children}
    <Footer />
  </div>
);

export default Layout;
