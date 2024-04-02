import axios from "axios";
import { CardType, ColumType } from "../types";
import { CreateCardType, SwitchCardPositionTypes } from "./types";
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

export async function postCard(body: CreateCardType): Promise<CardType> {
  const card = await axios.post(`${url}cards/`, body, config);
  return card.data;
}

export async function changeCardPosition(body: SwitchCardPositionTypes): Promise<string> {
  const card = await axios.post(`${url}cards/change_card_position/`, body, config);
  return card.data;
}
