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
    state: { product }
  } = React.useContext(store.StoreContext);

  return (
    <>
      <Header />
      {product == null ? null : (
        <Modal>
          <ProductDetail product={product} />
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
