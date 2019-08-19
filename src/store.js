import React from "react";
import _ from "lodash";
import { products, categories } from "./data";

const initialState = {
  data: {
    products: _.keyBy(products, "id"),
    categories: _.keyBy(categories, "id")
  },
  category: categories[0].id,
  product: null,
  priceFilter: [null, null],
  search: ""
};

const actions = {
  SET_SEARCH: "SET_SEARCH",
  SET_PRICE_FILTER: "SET_PRICE_FILTER",
  SET_CATEGORY: "SET_CATEGORY",
  SET_PRODUCT: "SET_PRODUCT"
};

const stateReducer = (state, action) => {
  console.log("DISPATCH", action);

  switch (action.type) {
    case actions.SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };

    case actions.SET_PRICE_FILTER:
      return {
        ...state,
        priceFilter: action.payload
      };

    case actions.SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };

    case actions.SET_PRODUCT:
      return {
        ...state,
        product: action.payload
      };

    default:
      return state;
  }
};

const StoreContext = React.createContext({});

const store = {
  initialState,
  actions,
  stateReducer,
  StoreContext
};

console.log(initialState);

export default store;
