import { useState } from "react";
import { ColumType } from "src/types";
import { FaPlus } from "react-icons/fa";
import { AddCardButton, CardsWrapper, ColumnContainer } from "./styles";
import Card from "../card";
import { Droppable } from "@hello-pangea/dnd";
import FakeCard from "../fakeCard";
import { postCard } from "src/services";
import { QueryObserverResult, RefetchOptions, useMutation } from "@tanstack/react-query";

interface Props {
  column: ColumType;
  refetch: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<ColumType[], Error>>;
}
export default function Column({ column, refetch }: Props) {
  const { cards, id, title } = column;
  const [CreatingCard, setCreatingCard] = useState(false);

  const createCardMutation = useMutation({
    mutationFn: async (cardTitle: string) => {
      return await postCard({ column: id, title: cardTitle }).then((res) => res);
    },
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <Droppable droppableId={`${id}`} type="list" direction="vertical">
      {(provided) => (
        <ColumnContainer {...provided.droppableProps} ref={provided.innerRef}>
          <b>{title}</b>
          <CardsWrapper>
            {cards.map((card, index) => (
              <Card index={index} key={card.id} card={card} />
            ))}
            {provided.placeholder}
            <FakeCard submitFn={(title) => createCardMutation.mutate(title)} isOpen={CreatingCard} setIsOpen={setCreatingCard} />
          </CardsWrapper>
          <AddCardButton onClick={() => setCreatingCard(true)}>
            <FaPlus />
            <p>Adicionar um cartão</p>
          </AddCardButton>
        </ColumnContainer>
      )}
    </Droppable>
  );
}
