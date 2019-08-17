import React from "react";
import _ from "lodash";
import { products, categories } from "./data";

const initialState = {
  data: {
    products: _.keyBy(products, "id"),
    categories: _.keyBy(categories, "id")
  },
  category: null,
  product: null,
  minPrice: null,
  maxPrice: null,
  search: ""
};

const actions = {
  SET_SEARCH: "SET_SEARCH",
  SET_MIN_PRICE: "SET_MIN_PRICE",
  SET_MAX_PRICE: "SET_MAX_PRICE",
  SET_CATEGORY: "SET_CATEGORY",
  SET_PRODUCT: "SET_PRODUCT"
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };

    case actions.SET_MIN_PRICE:
      return {
        ...state,
        minPrice: action.payload
      };

    case actions.SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.payload
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

export default store;
