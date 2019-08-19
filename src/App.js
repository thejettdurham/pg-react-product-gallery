import React from "react";
import "./App.css";
import StoreProvider from "./StoreProvider";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ProductListing from "./screens/ProductListing";
import store from "./store";
import ProductDetail from "./components/ProductDetail";
import Content from "./components/Content";

const AppPresentation = () => {
  const {
    state: { data, product },
    dispatch
  } = React.useContext(store.StoreContext);

  const dismissProduct = () =>
    dispatch({
      type: store.actions.SET_PRODUCT,
      payload: null
    });

  return (
    <>
      <Header />
      {product == null ? null : (
        <Modal dismissModal={dismissProduct}>
          <ProductDetail
            product={data.products[product]}
            {...{ dismissProduct }}
          />
        </Modal>
      )}
      <Content>
        <ProductListing />
      </Content>
    </>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <AppPresentation />
    </StoreProvider>
  );
};

export default App;
