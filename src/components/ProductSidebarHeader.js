import * as React from "react";

const style = {
  fontSize: "14px",
  fontWeight: "600"
};

const ProductSidebarHeader = ({ children }) => (
  <span {...{ style }}>{children}</span>
);

export default ProductSidebarHeader;
