import { UseCartContext } from "../Context/CartContext";
import { React, useState } from "react";
import CartItem from "../CartItem/CartItem";
import { DivCart, Title, EmptyButton, DivContainer } from "./CartStyle";
import Loader from "react-loader-spinner";
import ContactForm from "../Form/ContactForm";

const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <DivContainer>
      {loading ? (
        <Loader
          type="Audio"
          color="#256ce1"
          height={80}
          width={80}
          timeout={3000}
        />
      ) : (
        <div>
          <Title>Cart</Title>

          {CartList.length < 1 ? (
            <h2>You have no items in your shopping cart</h2>
          ) : (
            <div>
              <DivCart>
                <div>
                  {CartList.map((item) => (
                    <CartItem
                      key={item.Item.id}
                      Item={item.Item}
                      Quantity={item.Quantity}
                    />
                  ))}
                </div>
              </DivCart>
              <EmptyButton onClick={EmptyCart}>Empty Cart</EmptyButton>
              <h2>Total: {PriceTotal()} U$D</h2>
              <ContactForm />
            </div>
          )}
        </div>
      )}

      {console.log(CartList)}
    </DivContainer>
  );
};

export default Cart;
