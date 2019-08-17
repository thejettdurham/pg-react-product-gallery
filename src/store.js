import _ from "lodash";
import { products, categories } from "./data";

const initialState = {
  data: {
    products: _.keyBy(products, "id"),
    categories: _.keyBy(categories, "id")
  },
  selectedCategory: null,
  priceFilter: [null, null],
  search: ""
};

const actions = {
  SET_SEARCH: "SET_SEARCH",
  SET_MIN_PRICE: "SET_MIN_PRICE",
  SET_MAX_PRICE: "SET_MAX_PRICE",
  SET_CATEGORY: "SET_CATEGORY"
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload
      };

    case "SET_MIN_PRICE":
      return {
        ...state,
        priceFilter: [action.payload, state.priceFilter[1]]
      };

    case "SET_MAX_PRICE":
      return {
        ...state,
        priceFilter: [state.priceFilter[0], action.payload]
      };

    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload
      };

    default:
      return state;
  }
};

const store = {
  initialState,
  actions,
  stateReducer
};

export default store;
