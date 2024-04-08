import React from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { changeCardPosition, getColumns } from "src/services";
import { TriagilLogo, Wrapper } from "./styles";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { ToastContainer, toast } from "react-toastify";
import Column from "src/components/column";
import LoadingScreen from "src/components/loadingScreen";
import logo from "src/assets/triagil.png";
import "react-toastify/dist/ReactToastify.css";

export default function Kanban() {
  const { data, isLoading, refetch } = useQuery({ queryKey: ["kanbam"], queryFn: getColumns });
  const client = useQueryClient();

  const mutateCardPosition = useMutation({
    mutationFn: async (result: DropResult) => {
      const { destination, source } = result;
      if (!destination) {
        return;
      }
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }
      changeCardPosition({
        destination_card_index: Number(destination.index),
        destination_column_id: Number(destination.droppableId),
        origin_card_index: Number(source.index),
        origin_column_id: Number(source.droppableId),
      }).then((res) => res);
    },
    onMutate: (result) => {
      if (!result.destination) {
        return;
      } else {
        if (data) {
          const sourceColumnIndex = data.findIndex((column) => column.id.toString() === result.source.droppableId);
          const destinationColumnIndex = data.findIndex((column) => column.id.toString() === result.destination!.droppableId);
          const sourceColumnCards = data[sourceColumnIndex].cards;
          const destinationColumnCards = data[destinationColumnIndex].cards;
          const originalCard = { ...sourceColumnCards[result.source.index] };
          sourceColumnCards.splice(result.source.index, 1);
          destinationColumnCards.splice(result.destination.index, 0, originalCard);
        }
      }
    },
    onSettled: () => {
      refetch();
      client.invalidateQueries({ queryKey: ["kanbam"] });
    },
    onError: () => {
      toast.error("Não foi possível salvar a alteração nos cards");
    },
  });

  if (isLoading) return <LoadingScreen />;

  return (
    <Wrapper>
      <ToastContainer />
      <DragDropContext onDragEnd={(result) => mutateCardPosition.mutate(result)}>
        {data?.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </DragDropContext>
      <TriagilLogo img={logo} />
    </Wrapper>
  );
}
