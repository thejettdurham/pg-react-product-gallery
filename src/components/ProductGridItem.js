import React from "react";
import { displayPrice } from "../util";

const styles = {
  wrapper: {
    boxSizing: "border-box",
    width: "193px",
    height: "354px",
    padding: "20px",
    border: "1px solid #e4e4e4",
    boxShadow: "0 4px 14px 7px rgba(121,121,121,0.05)",
    borderRadius: "4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  imageWrapper: {
    height: "189px",
    display: "flex",
    justifyContent: "center"
  },
  image: {
    alignSelf: "center"
  },
  name: {
    textAlign: "center",
    fontSize: "20px",
    color: "#373738",
    padding: "0 20px",
    height: "94px"
  },
  price: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 600,
    color: "#f8cb00",
    margin: "0 0 5px",
    height: "26px"
  }
};

const ProductGridItem = ({ product, onClick }) => {
  return (
    <div style={styles.wrapper} {...{ onClick }}>
      <div style={styles.imageWrapper}>
        <img
          style={styles.image}
          src={product.images.medium}
          alt={product.name}
        />
      </div>
      <div style={styles.name}>{product.name}</div>
      <div style={styles.price}>{displayPrice(product.price)}</div>
    </div>
  );
};

export default ProductGridItem;
