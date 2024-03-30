import axios from "axios";
import { CardType, ColumType, CreateCardType } from "../types";
const url = process.env.REACT_APP_API_URL;
const config = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export async function getColumns(): Promise<ColumType[]> {
  const columns = await axios.get(`${url}columns/`, config);
  return columns.data;
}

export async function postColumn(title: string): Promise<ColumType> {
  const column = await axios.post(`${url}columns/`, { title }, config);
  return column.data;
}

export async function postCard({ title, column, description }: CreateCardType): Promise<CardType> {
  const card = await axios.post(`${url}cards/`, { title, column, description }, config);
  return card.data;
}
