export const PRODUCTION_STATE = "production";
export const IN_DEVELOP_STATE = "in development";
export const ARCHIVED_STATE = "archived";

type CardState = "production" | "in development" | "archived";

export interface CardItemType {
  id: string;
  title: string;
  description: React.ReactNode;
  color: string;
  icon: string;
  state: CardState;
}
