import React from "react";
import ProductCategoriesList from "./ProductCategoriesList";
import ProductPriceFilter from "./ProductPriceFilter";

const styles = {
  wrapper: {}
};

const ProductSidebar = () => {
  return (
    <div style={styles.wrapper}>
      <ProductCategoriesList />
      <ProductPriceFilter />
    </div>
  );
};

export default ProductSidebar;
