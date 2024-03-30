import { CardType } from "src/types";
import { Component } from "./styles";

type Props = {
  card: CardType;
};

export default function Card({ card }: Props) {
  const { title } = card;
  return (
    <Component>
      <p>{title}</p>
    </Component>
  );
}
