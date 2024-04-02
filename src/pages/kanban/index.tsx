import { useQuery } from "@tanstack/react-query";
import { changeCardPosition, getColumns } from "src/services";
import { Wrapper } from "./styles";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import Column from "src/components/column";
import LoadingScreen from "src/components/loadingScreen";

export default function Kanban() {
  const { data, isLoading, refetch } = useQuery({ queryKey: ["columns"], queryFn: getColumns });

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }
    changeCardPosition({
      destination_card_index: Number(result.destination.index),
      destination_column_id: Number(result.destination.droppableId),
      origin_card_index: Number(result.source.index),
      origin_column_id: Number(result.source.droppableId),
    }).then((res) => {
      refetch();
    });
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        {data?.map((column) => (
          <Column key={column.id} column={column} refetch={refetch} />
        ))}
      </DragDropContext>
    </Wrapper>
  );
}
