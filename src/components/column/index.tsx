import React, { useEffect, useRef, useState } from "react";
import { ColumType } from "src/types";
import { FaPlus } from "react-icons/fa";
import { AddCardButton, CardsWrapper, ColumnName, Component } from "./styles";
import { Component as FakeCard } from "src/components/card/styles";
import { useOnBlur } from "src/hooks/useOnBlur";
import Card from "../card";

export default function Column({ title, cards }: ColumType) {
  const [CreatingCard, setCreatingCard] = useState(false);
  const [CardTitle, setCardTitle] = useState("");
  const FakeCardRef = useRef<any>();

  function handleCreateCardButton() {
    setCreatingCard(true);
  }

  function handleCreatingCard() {
    if (CardTitle.length === 0) {
      setCreatingCard(false);
      return;
    }
  }

  useOnBlur({
    callback: () => {
      handleCreatingCard();
    },
    elementRef: FakeCardRef,
    dependencies: [],
  });

  useEffect(() => {
    if (CreatingCard) {
      FakeCardRef.current.focus();
    }
  }, [CreatingCard]);

  return (
    <Component>
      <ColumnName>{title}</ColumnName>
      <CardsWrapper>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
        {CreatingCard && (
          <FakeCard>
            <input ref={FakeCardRef} value={CardTitle} onChange={(e) => setCardTitle(e.target.value)} />
          </FakeCard>
        )}
      </CardsWrapper>
      <AddCardButton onClick={handleCreateCardButton}>
        <FaPlus />
        <p>Adicionar um cartão</p>
      </AddCardButton>
    </Component>
  );
}
