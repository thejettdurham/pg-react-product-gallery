import React from "react";
import _ from "lodash";
import store from "../store";
import ProductGridItem from "./ProductGridItem";

const styles = {
  wrapper: {},
  headerText: {}
};

const ProductsGridPresentation = ({ category, products, selectProduct }) => (
  <div style={styles.wrapper}>
    <h2 style={styles.headerText}>{category.name}</h2>
    {products.map(product => (
      <ProductGridItem
        key={product.id}
        product={product}
        onClick={() => selectProduct(product.id)}
      />
    ))}
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
