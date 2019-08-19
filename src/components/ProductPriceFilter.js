import React from "react";
import store from "../store";
import { execWithEventValue } from "../util";

const styles = {
  wrapper: {},
  headerText: {},
  formGroup: {}
};

const parsePrice = priceInput => {
  if (priceInput === "") return null;
  return Number(priceInput);
};

const ProductPriceFilter = () => {
  const {
    state: { minPrice, maxPrice },
    dispatch
  } = React.useContext(store.StoreContext);
  const [minPriceInput, setMinPriceInput] = React.useState(minPrice || "");
  const [maxPriceInput, setMaxPriceInput] = React.useState(maxPrice || "");

  const updatePrices = () => {
    return dispatch({
      type: store.actions.SET_PRICE_FILTER,
      payload: [parsePrice(minPriceInput), parsePrice(maxPriceInput)]
    });
  };

  return (
    <div style={styles.wrapper}>
      <h4 style={styles.headerText}>FILTER BY PRICE</h4>
      <div style={styles.formGroup}>
        <form onSubmit={execWithEventValue(updatePrices)}>
          <input
            type="text"
            value={minPriceInput}
            onChange={execWithEventValue(setMinPriceInput)}
            placeholder="Min"
          />
          <input
            type="text"
            value={maxPriceInput}
            onChange={execWithEventValue(setMaxPriceInput)}
            placeholder="Min"
          />
          <input type="submit" value="Go" />
        </form>
      </div>
    </div>
  );
};

export default ProductPriceFilter;
