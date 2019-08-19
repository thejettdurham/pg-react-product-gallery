import React from "react";
import SearchBox from "./SearchBox";

const styles = {
  wrapper: {},
  headerText: {}
};

const Header = () => {
  return (
    <header style={styles.wrapper}>
      <h1 style={styles.headerText}>Amazing Store</h1>
      <SearchBox />
    </header>
  );
};

export default Header;
