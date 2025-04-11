import { CardItemType } from "../types";

export interface ModalCardProps {
  index: number;
  cards: CardItemType[];
  onClick: () => void;
}
