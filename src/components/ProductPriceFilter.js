import React from "react";
import store from "../store";
import { execWithEventValue } from "../util";
import ProductSidebarHeader from "./ProductSidebarHeader";

const styles = {
  formGroup: {
    marginTop: "14px",
    display: "flex"
  },
  priceInput: {
    border: "1px solid #b8b8b8",
    borderRadius: "2px",
    width: "50px",
    height: "33px",
    margin: "0 5px 0 0",
    padding: "0 0 0 8px"
  },
  goButton: {
    width: "91px",
    height: "35px",
    borderRadius: "4px",
    border: 0,
    background: "#f8cb00",
    color: "#453800"
  }
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
    <div>
      <ProductSidebarHeader style={styles.headerText}>
        FILTER BY PRICE
      </ProductSidebarHeader>
      <form
        onSubmit={execWithEventValue(updatePrices)}
        style={styles.formGroup}
      >
        <input
          style={styles.priceInput}
          className="price-input"
          type="text"
          value={minPriceInput}
          onChange={execWithEventValue(setMinPriceInput)}
          placeholder="$ Min"
        />
        <input
          style={styles.priceInput}
          className="price-input"
          type="text"
          value={maxPriceInput}
          onChange={execWithEventValue(setMaxPriceInput)}
          placeholder="$ Max"
        />
        <input style={styles.goButton} type="submit" value="Go" />
      </form>
    </div>
  );
};

export default ProductPriceFilter;
