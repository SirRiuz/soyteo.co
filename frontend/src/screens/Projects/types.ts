export const PRODUCTION_STATE = "in production";
export const IN_DEVELOP_STATE = "in development";
export const ARCHIVED_STATE = "archived";

// Shared-element (layoutId) transition used by the grid card, the
// fullscreen card and their inner icon/title so they morph in sync
export const LAYOUT_SPRING = {
  type: "spring",
  stiffness: 320,
  damping: 32,
} as const;

type CardState = "in production" | "in development" | "archived";

export interface CardLinkType {
  label: string;
  url: string;
}

export interface CardItemType {
  id: string;
  title: string;
  description: React.ReactNode;
  color: string;
  icon: string;
  state: CardState;
  links?: CardLinkType[];
}
