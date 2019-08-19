import React from "react";
import SearchBox from "./SearchBox";
import SidebarWrapper from "./SidebarWrapper";

const styles = {
  wrapper: {
    background: "#f8cb00",
    display: "flex",
    borderTop: "5px solid #6364d8",
    alignItems: "center"
  },
  headerText: {
    fontSize: "36px",
    lineHeight: "33px",
    color: "#fff",
    margin: "50px 0",
    padding: "0 25px"
  }
};

const Header = () => {
  return (
    <header style={styles.wrapper}>
      <SidebarWrapper>
        <h1 style={styles.headerText}>Amazing Store</h1>
      </SidebarWrapper>
      <SearchBox />
    </header>
  );
};

export default Header;
