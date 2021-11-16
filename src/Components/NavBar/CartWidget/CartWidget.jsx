import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseCartContext } from "../../Context/CartContext";

function CartWidget() {
  const { IconCart, CartList } = UseCartContext();
  return (
    <Link to="/cart" style={{ display: "flex", fontSize: " 1.5em" }}>
      <FaCartPlus color="#fff" />

      {CartList.length < 1 ? (
        " "
      ) : (
        <p style={{ color: "white", padding: "0 10px" }}>{IconCart()} </p>
      )}
    </Link>
  );
}

export default CartWidget;
