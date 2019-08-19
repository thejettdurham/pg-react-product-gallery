import React from "react";

const styles = {
  wrapper: {
    display: "flex",
    width: "400px",
    marginRight: "20px"
  },
  contentWrapper: {
    display: "flex",
    marginLeft: "126px"
  }
};

const SidebarWrapper = ({ children }) => (
  <div style={styles.wrapper}>
    <div style={styles.contentWrapper}>{children}</div>
  </div>
);

export default SidebarWrapper;
