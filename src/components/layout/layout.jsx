import Header from "./header";
import Footer from "./footer";
import React from "react";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}
