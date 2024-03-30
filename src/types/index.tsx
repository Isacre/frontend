export declare type ColumType = {
  id: number;
  index: number;
  title: string;
  cards: CardType[];
  updated_at: string;
  created_at: string;
};

export declare type CardType = {
  id: number;
  column: number;
  index: number;
  title: string;
  description: string;
  updated_at: string;
  created_at: string;
};

export declare type CreateCardType = { title: string; description: string; column: number };
