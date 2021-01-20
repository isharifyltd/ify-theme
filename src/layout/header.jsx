import React from "react";
import Nav from "../components/nav";

const Header = () => {
  return (
    <header className="Ify-sticky-top" style={{ zIndex: 1000 }}>
      <Nav />
    </header>
  );
};

export default Header;
