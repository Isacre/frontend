import React from "react";
import { CardType } from "src/types";
import { Component } from "./styles";
import { Draggable } from "@hello-pangea/dnd";
import { MdDeleteOutline } from "react-icons/md";

type Props = {
  card: CardType;
  index: number;
  deleteCardFn: Function;
};

export default function Card({ card, index, deleteCardFn }: Props) {
  const { title, id, is_fake } = card;

  return (
    <Draggable index={index} draggableId={`card-${id}`}>
      {(provided) => (
        <Component ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <p>{title}</p>
          <div>
            <MdDeleteOutline
              size={20}
              onClick={() => {
                if (is_fake) {
                  return;
                }
                deleteCardFn();
              }}
              color={is_fake ? "grey" : "red"}
              cursor={"pointer"}
            />
          </div>
        </Component>
      )}
    </Draggable>
  );
}
