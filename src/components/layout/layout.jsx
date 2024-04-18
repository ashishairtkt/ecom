import Header from "./header";
import Footer from "./footer";
import React from "react";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <div className="layout-container">
        <div className="content-wrapper">
          <Header />
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
