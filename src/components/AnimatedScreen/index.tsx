import { JSX } from "react";
import { Container } from "./styled";
import { AnimatedScreenProps } from "./types";

export default function AnimatedScreen({
  onClick,
}: AnimatedScreenProps): JSX.Element {
  return (
    <Container
      initial={{ filter: "blur(0px)" }}
      animate={{ filter: "blur(15px)" }}
      exit={{ filter: "blur(0px)" }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      key="overlay"
      onClick={onClick}
    />
  );
}
