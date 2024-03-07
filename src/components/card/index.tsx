import React from "react";
import { CardType } from "src/types";
import styled from "styled-components";

const Component = styled.div`
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 10px;
`;
type Props = {
  card: CardType;
};

export default function Card({ card }: Props) {
  const { title } = card;
  return <Component>{title}</Component>;
}
