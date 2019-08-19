import React from "react";
import ReactDOM from "react-dom";

const styles = {
  wrapper: {
    background: "rgba(255,255,255,0.86)",
    position: "fixed",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  contentWrapper: {
    zIndex: 100
  }
};

const modalRoot = document.getElementById("modal-root");
const Modal = ({ dismissModal, children }) => {
  React.useEffect(
    () => {
      document.addEventListener(
        "keydown",
        e => e.code === "Escape" && dismissModal()
      );
    },
    [dismissModal]
  );

  const modalComponent = (
    <div style={styles.wrapper} onClick={dismissModal}>
      <div style={styles.contentWrapper} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalComponent, modalRoot);
};

export default Modal;
