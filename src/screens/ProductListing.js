import React from "react";
import ProductsGrid from "../components/ProductsGrid";
import ProductCategoriesList from "../components/ProductCategoriesList";
import ProductPriceFilter from "../components/ProductPriceFilter";
import SidebarWrapper from "../components/SidebarWrapper";

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
