import { CardItemType } from "../types";

export interface CardsProps {
  setIndex: (index: number) => void;
  cards: CardItemType[];
}
