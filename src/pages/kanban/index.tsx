import React from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchKanbanColumns } from "src/services";
import Column from "src/components/column";

const Wrapper = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  gap: 25px;
  padding: 20px;
`;

const LoadingScreen = styled.div`
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
  height: 100%;
  width: 100%;
`;

export default function Kanban() {
  const { data, isLoading } = useQuery({ queryKey: ["columns"], queryFn: fetchKanbanColumns });

  if (isLoading) return <LoadingScreen>Carregando...</LoadingScreen>;

  return (
    <Wrapper>
      {data?.map((column) => (
        <Column key={column.id} {...column} />
      ))}
    </Wrapper>
  );
}
