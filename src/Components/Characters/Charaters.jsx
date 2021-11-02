import { React, useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import Loader from "react-loader-spinner";
import { getFirestore } from "../services/getFirebase";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    db.collection("Items")
      .get()

      .then((resp) =>
        setCharacters(
          resp.docs.map((item) => ({ id: item.id, ...item.data() }))
        )
      );

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
        characters.map((character) => (
          <Card key={character.id} character={character} />
        ))
      )}
    </Layout>
  );
}

export default Characters;
