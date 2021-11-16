import { React, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Item from "../Item/Item";
import Loader from "react-loader-spinner";
import { getFirestore } from "../services/getFirebase";

function ItemList() {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    db.collection("Items")
      .get()

      .then((resp) =>
        setItems(resp.docs.map((item) => ({ id: item.id, ...item.data() })))
      )
      .catch((err) => console.log(err));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <Layout style={{ display: "Center" }}>
      {loading ? (
        <Loader
          type="Audio"
          color="#256ce1"
          height={80}
          width={80}
          timeout={3000}
        />
      ) : (
        items.map((item) => <Item key={item.id} item={item} />)
      )}
    </Layout>
  );
}

export default ItemList;
