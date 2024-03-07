import axios from "axios";
import { ColumType } from "../types";
const url = process.env.REACT_APP_API_URL;
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export async function fetchKanbanColumns(): Promise<ColumType[]> {
  const columns = await axios.get(`${url}columns/`, config);
  return columns.data;
}
