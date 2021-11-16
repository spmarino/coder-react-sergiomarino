import { React } from "react";
import Counter from "../Counter/Counter";
import { DivCard, Img, List, DivContainer, Title } from "./ItemDetailStyle";
import { UseCartContext } from "../Context/CartContext";

const ItemDetail = ({ Item }) => {
  const { image, name, stock, description, price } = Item;

  const { AddItem } = UseCartContext();

  const OnAdd = (Quantity) => {
    AddItem(Item, Quantity);
  };

  return (
    <DivCard>
      <Img src={image} alt="" />
      <DivContainer>
        <Title>{name}</Title>

        <List>
          <li>
            <span style={{ color: "#98d40d" }}>Description: </span>
            {description}
          </li>
          <li>
            <span style={{ color: "#98d40d" }}>Stock </span>
            {stock} unites
          </li>
          <li>
            <span style={{ color: "#98d40d" }}>Span: </span> {price} U$D
          </li>
        </List>

        <Counter Initial={1} Stock={stock} OnAdd={OnAdd} />
      </DivContainer>
    </DivCard>
  );
};

export default ItemDetail;
