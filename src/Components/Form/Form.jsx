import { React, useState } from "react";
import { UseCartContext } from "../Context/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../services/getFirebase";
import Swal from "sweetalert2";

const Form = () => {


  const [FormData, SetFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });



  const { CartList, PriceTotal, EmptyCart } = UseCartContext();

  const GenerateOrder = (e) => {
    e.preventDefault();

    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = FormData;
    order.total = PriceTotal();
    order.items = CartList.map((cartItem) => {
      const id = cartItem.Item.id;
      const name = cartItem.Item.name;
      const price = cartItem.Item.price * cartItem.Quantity;

      return { id, name, price };
    });

    const dbQuery = getFirestore();
    const orderQuery = dbQuery.collection("orders");
    orderQuery
      .add(order)
      .then((result) =>
        Swal.fire(
          "Your purchase has been successfully registered",
          `Purchase code #${result.id}`,
          "success"
        )
      )
      .catch((error) => console.log(error))
      .finally(() => {
        EmptyCart();
        SetFormData([]);
      });
  };

  const HandleOnChange = (e) => {
    const { name, value } = e.target;
    SetFormData({ ...FormData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={GenerateOrder} onChange={HandleOnChange}>
        <input
          type="text"
          name="name"
          placeholder="enter your name"
          value={FormData.name}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="enter your phone"
          value={FormData.phone}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="enter your email"
          value={FormData.email}
          required
        />
        <input
          type="email"
          name="email2"
          placeholder="repeat your email"
          value={FormData.email}
          required
        />
        <button>Pay</button>
      </form>
    </div>
  );
};

export default Form;
