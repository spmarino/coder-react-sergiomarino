import { React, useState } from "react";
import { DivContainer, Title, NavLink } from "./PageStyle";
import Loader from "react-loader-spinner";
import Layout from "../Components/Layout/Layout";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
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
        <DivContainer>
          <Title>Categories</Title>

          <NavLink to={`/category/1`}>T-Shirts</NavLink>
          <NavLink to={`/category/2`}>Sweaters</NavLink>
          <NavLink to={`/category/3`}>Sweatshirts</NavLink>
          <NavLink to={`/category/4`}>Accessories</NavLink>
        </DivContainer>
      )}
    </Layout>
  );
};

export default Categories;
