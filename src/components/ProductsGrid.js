import React from "react";
import _ from "lodash";
import store from "../store";
import ProductGridItem from "./ProductGridItem";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column"
  },
  itemsWrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridGap: "28px"
  },
  headerText: {
    margin: "0 0 35px",
    fontSize: "27px",
    fontWeight: 400,
    color: "#2d2d2d",
    lineHeight: "31px"
  }
};

const ProductsGridPresentation = ({ category, products, selectProduct }) => (
  <div style={styles.wrapper}>
    <h2 style={styles.headerText}>{category.name}</h2>
    <div style={styles.itemsWrapper}>
      {products.map(product => (
        <ProductGridItem
          key={product.id}
          product={product}
          onClick={() => selectProduct(product.id)}
        />
      ))}
    </div>
  </div>
);

const getProductsByQuery = query => products =>
  products.filter(p => p.name.includes(query));

const getProductsByCategory = category => products =>
  products.filter(p => p.categoryId === category);

const getProductsByPrice = ([minPrice, maxPrice]) => products =>
  products.filter(p => p.price >= minPrice && p.price <= maxPrice);

const filterProducts = ({ search, category, priceFilter }, products) =>
  _.flow([
    getProductsByQuery(search),
    getProductsByCategory(category),
    getProductsByPrice(
      _.zipWith(
        [
          _.curryRight(_.defaultTo)(0),
          _.curryRight(_.defaultTo)(Number.MAX_VALUE)
        ],
        priceFilter,
        (f, v) => f(v)
      )
    )
  ])(products);

const ProductsGrid = () => {
  const { state, dispatch } = React.useContext(store.StoreContext);
  const category = state.data.categories[state.category];
  const products = filterProducts(
    _.omit(state, ["data"]),
    Object.values(state.data.products)
  );

  const selectProduct = product =>
    dispatch({
      type: store.actions.SET_PRODUCT,
      payload: product
    });

  return (
    <ProductsGridPresentation {...{ category, products, selectProduct }} />
  );
};

export default ProductsGrid;
