import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import Layout from "../Layout/Layout";
import Loader from "react-loader-spinner";
import { getFirestore } from "../services/getFirebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Item, setItem] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    db.collection("Items")
      .doc(id)
      .get()
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err));

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [id]);

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
