import React from "react";

const styles = {
  wrapper: {},
  image: {},
  name: {},
  price: {}
};

const ProductGridItem = ({ product, onClick }) => {
  return (
    <div style={styles.wrapper} {...{onClick}}>
      <img style={styles.image} src={product.images.medium} alt={product.name} />
      <div style={styles.name}>{product.name}</div>
      <div style={styles.price}>{product.price}</div>
    </div>
  );
};

export default ProductGridItem;
