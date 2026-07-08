import { JSX } from "react";
import { Container } from "./styled";
import { AnimatedScreenProps } from "./types";

export default function AnimatedScreen({
  onClick,
}: AnimatedScreenProps): JSX.Element {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      key="overlay"
      onClick={onClick}
    />
  );
}
