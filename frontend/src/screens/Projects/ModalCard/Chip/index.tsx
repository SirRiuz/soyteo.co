import { JSX } from "react";
import { Container } from "./styled";

interface Props {
  children: React.ReactNode;
}

export default function Chip({ children }: Props): JSX.Element {
  return <Container>{children}</Container>;
}
