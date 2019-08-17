import React from "react";
import store from "./store";

const { stateReducer, initialState, StoreContext } = store;

const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(stateReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
