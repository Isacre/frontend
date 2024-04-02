import { CardType } from "src/types";
import { Component } from "./styles";
import { Draggable } from "@hello-pangea/dnd";

type Props = {
  card: CardType;
  index: number;
};

export default function Card({ card, index }: Props) {
  const { title, id } = card;
  return (
    <Draggable index={index} draggableId={`card-${id}`}>
      {(provided) => (
        <Component ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p>{title}</p>
        </Component>
      )}
    </Draggable>
  );
}
