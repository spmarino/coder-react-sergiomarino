import { UseCartContext } from "../Context/CartContext";
import { React, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { DivCart, Title, EmptyButton, DivContainer} from "./CartStyle";
import Loader from "react-loader-spinner";

const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false)
},2000)

  return (
    <DivContainer>
      {loading ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <div>
          <Title>Cart</Title>
          <DivCart>
            {CartList.map((item) => (
              <CartItem
                key={item.Item.id}
                Item={item.Item}
                Quantity={item.Quantity}
              />
            ))}
          </DivCart>
          <EmptyButton onClick={EmptyCart}>Empty Cart</EmptyButton>
          {PriceTotal()}

        </div>
      )}

      {console.log(CartList)}
     
    </DivContainer>
  );
};

export default Cart;
