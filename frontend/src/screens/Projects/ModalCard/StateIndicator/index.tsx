import { Container } from "./styled";
import { JSX } from "react";

interface Props {
  color: string;
}

export default function StateIndicator({ color }: Props): JSX.Element {
  return (
    <Container
      animate={{ opacity: [1, 0, 1] }}
      style={{ backgroundColor: color }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}
