import { useState } from "react";
import { ColumnType } from "src/types";
import { FaPlus } from "react-icons/fa";
import { AddCardButton, CardsWrapper, ColumnContainer } from "./styles";
import Card from "../card";
import { Droppable } from "@hello-pangea/dnd";
import FakeCard from "../fakeCard";
import { deleteCard, postCard } from "src/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface Props {
  column: ColumnType;
}
export default function Column({ column }: Props) {
  const { cards, id, title } = column;
  const [CreatingCard, setCreatingCard] = useState(false);
  const client = useQueryClient();

  const createCardMutation = useMutation({
    mutationFn: async (cardTitle: string) => {
      return postCard({ column: id, title: cardTitle }).then((res) => res);
    },
    onMutate: (newCard) => {
      cards.push({ column: id, title: newCard, id: Math.random(), created_at: "", description: "", updated_at: "", index: cards.length, is_fake: true });
    },
    onSettled: () => {
      client.invalidateQueries({ queryKey: ["kanbam"] });
    },
    onError: () => {
      toast.info("Algo deu errado, o card não foi criado corretamente");
    },
  });

  const deleteCardMutation = useMutation({
    mutationFn: (cardId: number) => deleteCard(cardId),
    onMutate: (cardId: number) => {
      client.setQueryData(["kanbam"], (res: ColumnType[]) => {
        column.cards = column.cards.filter((card) => card.id !== cardId);
        return res;
      });
    },
    onError: () => {
      client.invalidateQueries({ queryKey: ["kanbam"] });
    },
  });

  return (
    <Droppable droppableId={`${id}`} type="list" direction="vertical">
      {(provided) => (
        <ColumnContainer {...provided.droppableProps} ref={provided.innerRef}>
          <b>{title}</b>
          <CardsWrapper>
            {cards.map((card, index) => (
              <Card deleteCardFn={() => deleteCardMutation.mutate(card.id)} index={index} key={card.id} card={card} />
            ))}
            {provided.placeholder}
            <FakeCard submitFn={(title) => createCardMutation.mutate(title)} isOpen={CreatingCard} setIsOpen={setCreatingCard} />
          </CardsWrapper>
          {!CreatingCard && (
            <AddCardButton onClick={() => setCreatingCard(true)}>
              <FaPlus />
              <p>Adicionar um cartão</p>
            </AddCardButton>
          )}
        </ColumnContainer>
      )}
    </Droppable>
  );
}
