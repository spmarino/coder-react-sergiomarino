import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Nav, H2, ButtonCart } from "./CounterStyle";

const Counter = ({ Stock, Initial, OnAdd }) => {
  const [Quantity, SetQuantity] = useState(Initial);
  const [show, setShow] = useState(true);

  const add = () => {
    if (Quantity < Stock) SetQuantity(Quantity + 1);
  };
  const subtract = () => {
    if (Quantity > 1) SetQuantity(Quantity - 1);
  };

  const AddtoCart = () => {
    OnAdd(Quantity);
    setShow(false);
  };

  return (
    <div>
      {show ? (
        <div>
          <Nav>
            <Button onClick={subtract}> - </Button>
            <H2>{Quantity} </H2>
            <Button onClick={add}> + </Button>
          </Nav>
          <Button onClick={AddtoCart}> Add to Cart </Button>
        </div>
      ) : (
        <div>
          <Link to="/cart">
            <ButtonCart> Cart </ButtonCart>
          </Link>
          <Link to="/">
            <Button> keep buying</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Counter;
