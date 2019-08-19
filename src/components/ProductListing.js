import React from "react";
import ProductsGrid from "./ProductsGrid";
import ProductCategoriesList from "./ProductCategoriesList";
import ProductPriceFilter from "./ProductPriceFilter";
import SidebarWrapper from "./SidebarWrapper";

const styles = {
  wrapper: {
    display: "flex"
  }
};

const ProductListing = () => {
  return (
    <div style={styles.wrapper}>
      <SidebarWrapper>
        <ProductCategoriesList />
        <ProductPriceFilter />
      </SidebarWrapper>
      <ProductsGrid />
    </div>
  );
};

export default ProductListing;
