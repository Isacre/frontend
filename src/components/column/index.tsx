import React from "react";
import { ColumType } from "src/types";
import { FaPlus } from "react-icons/fa";
import { AddCardButton, CardsWrapper, ColumnName, Component } from "./styles";
import Card from "../card";

export default function Column({ title, cards }: ColumType) {
  return (
    <Component>
      <ColumnName>{title}</ColumnName>
      <CardsWrapper>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </CardsWrapper>
      <AddCardButton>
        <FaPlus />
        <p>Adicionar um cartão</p>
      </AddCardButton>
    </Component>
  );
}
