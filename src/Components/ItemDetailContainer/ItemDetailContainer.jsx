import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Layout from "../Layout/Layout";
import Loader from "react-loader-spinner";
import { getFirestore } from "../services/getFirebase";

const ItemDetailContainer = () => {
  const db = getFirestore();
  const { id } = useParams();

  const [Item, setItem] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("Items")
      .doc(id)
      .get()
      .then((resp) => setItem({ id: resp.id, ...resp.data() }));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loader
        type="Audio"
        color="#256ce1"
        height={80}
        width={80}
        timeout={3000}
        />
      ) : (
        <ItemDetail Item={Item} />
      )}
    </Layout>
  );
};

export default ItemDetailContainer;
