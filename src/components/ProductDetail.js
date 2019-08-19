import React from "react";
import { displayPrice } from "../util";

const styles = {
  wrapper: {
    boxSizing: "border-box",
    width: "860px",
    height: "533px",
    background: "white",
    boxShadow: "0 16px 34px 7px rgba(121,121,121,0.10)",
    borderRadius: "4px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px"
  },
  dismissButton: {
    position: "absolute",
    right: 0,
    top: 0,
    textAlign: "center",
    fontSize: "28px",
    padding: "20px",
    cursor: "pointer"
  },
  imageWrapper: {
    marginRight: "50px"
  },
  image: {
    height: "390px",
    width: "390px"
  },
  descriptionWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  name: {
    fontSize: "28px",
    color: "#373738",
    marginBottom: "16px"
  },
  price: {
    fontSize: "30px",
    fontWeight: 700,
    color: "#f8cb00",
    marginBottom: "19px"
  },
  description: {
    fontSize: "16px",
    color: "#585858",
    lineHeight: "30px"
  }
};

const ProductDetail = ({ product, dismissProduct }) => {
  return (
    <div style={styles.wrapper}>
      <i
        style={styles.dismissButton}
        onClick={dismissProduct}
        className="fa fa-times"
      />
      <div style={styles.imageWrapper}>
        <img
          style={styles.image}
          src={product.images.large}
          alt={product.name}
        />
      </div>
      <div style={styles.descriptionWrapper}>
        <div style={styles.name}>{product.name}</div>
        <div style={styles.price}>{displayPrice(product.price)}</div>
        <div style={styles.description}>{product.description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
