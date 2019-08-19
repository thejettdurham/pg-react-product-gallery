import React from "react";

const styles = {
  dismissButton: {},
  wrapper: {},
  image: {},
  name: {},
  price: {},
  description: {}
};

const ProductDetail = ({ product, dismissProduct }) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.dismissButton} onClick={dismissProduct} />
      <img
        style={styles.image}
        src={product.images.medium}
        alt={product.name}
      />
      <div style={styles.price}>{product.price}</div>
      <div style={styles.name}>{product.name}</div>
      <div style={styles.description}>{product.description}</div>
    </div>
  );
};

export default ProductDetail;
