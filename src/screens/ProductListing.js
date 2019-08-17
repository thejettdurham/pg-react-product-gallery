import React from "react";
import ProductSidebar from "../components/ProductSidebar";
import ProductsGrid from "../components/ProductsGrid";

const styles = {
  wrapper: {}
};

const ProductListing = () => {
  return (
    <div style={styles.wrapper}>
      <ProductSidebar />
      <ProductsGrid />
    </div>
  );
};

export default ProductListing;
