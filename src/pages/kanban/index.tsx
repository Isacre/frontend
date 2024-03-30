import { useQuery } from "@tanstack/react-query";
import { getColumns } from "src/services";
import { Wrapper } from "./styles";
import Column from "src/components/column";
import LoadingScreen from "src/components/loadingScreen";

export default function Kanban() {
  const { data, isLoading } = useQuery({ queryKey: ["columns"], queryFn: getColumns });

  if (isLoading) return <LoadingScreen />;

  return (
    <Wrapper>
      {data?.map((column) => (
        <Column key={column.id} {...column} />
      ))}
    </Wrapper>
  );
}
