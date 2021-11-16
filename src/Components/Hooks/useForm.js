import { useState } from "react";
import { UseCartContext } from "../Context/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../services/getFirebase";
import Swal from "sweetalert2";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { CartList, PriceTotal, EmptyCart } = UseCartContext();

  let order = {};
  order.date = firebase.firestore.Timestamp.fromDate(new Date());
  order.buyer = form;
  order.total = PriceTotal();
  order.items = CartList.map((cartItem) => {
    const id = cartItem.Item.id;
    const name = cartItem.Item.name;
    const price = cartItem.Item.price * cartItem.Quantity;

    return { id, name, price };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    const dbQuery = getFirestore();
    const orderQuery = dbQuery.collection("orders");

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      orderQuery
        .add(order)
        .then(
          (result) =>
            Swal.fire(
              "Your purchase has been successfully registered",
              `Purchase code #${result.id}`,
              "success"
            ),

          setTimeout(() => {
            EmptyCart();
          }, 3000)
        )
        .catch((error) => console.log(error))
        .finally(() => {
          setForm([]);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
