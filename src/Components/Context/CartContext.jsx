import { useState, React, createContext, useContext } from "react";

const CartContext = createContext([]);

export const UseCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [CartList, SetCartList] = useState([]);

  const AddItem = (Item, Quantity) => {
    const index = CartList.findIndex((i) => i.Item.id === Item.id);

    if (index > -1) {
      const oldQy = CartList[index].Quantity;

      CartList.splice(index, 1);

      SetCartList([...CartList, { Item, Quantity: Quantity + oldQy }]);
    } else {
      SetCartList([...CartList, { Item, Quantity }]);
    }
  };

  const IconCart = () => {
    return CartList.reduce((acum, i) => acum + i.Quantity, 0);
  };

  const PriceTotal = () => {
    return CartList.reduce((acum, i) => acum + i.Quantity * i.Item.price, 0);
  };

  const DelItem = (id) => {
    const items = CartList.filter((i) => i.Item.id !== id);
    SetCartList(items);
  };

  const EmptyCart = () => {
    SetCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        CartList,
        AddItem,
        EmptyCart,
        DelItem,
        IconCart,
        PriceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
