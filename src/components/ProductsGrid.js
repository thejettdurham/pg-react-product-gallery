import React from "react";
import _ from "lodash";
import store from "../store";

const ProductsGridPresentation = ({ products, selectProduct }) => {};

const filterProducts = ({ search, category, minPrice, maxPrice }, products) => {
  // TODO filter by search, category, then price
};

const ProductsGrid = () => {
  const { state, dispatch } = React.useContext(store.StoreContext);
  const products = filterProducts(
    _.omit(state, ["data"]),
    Object.values(state.data.products)
  );
  const selectProduct = product =>
    dispatch({
      type: store.actions.SET_PRODUCT,
      payload: product
    });

  return <ProductsGridPresentation {...{ products, selectProduct }} />;
};

export default ProductsGrid;
