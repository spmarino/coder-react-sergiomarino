import React from "react";
import {
  DivCard,
  Img,
  NavLink,
  List,
  ImgContainer,
  DivList,
} from "./ItemStyle";

const Item = ({ item }) => {
  const { image, name, stock, price, id } = item;

  return (
    <DivCard>
      <ImgContainer>
        <Img src={image} alt={name} />
      </ImgContainer>

      <DivList>
        <NavLink to={`/item/${id}`}>{name}</NavLink>
        <ul>
          <List>
            <b>Price:</b> {price}
          </List>
          <List>
            <b>Stock:</b> {stock}
          </List>
        </ul>
      </DivList>
    </DivCard>
  );
};

export default Item;
