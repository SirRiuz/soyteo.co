import { JSX } from "react";
import { Container, CtButton, Label } from "./styled";
import { ContactButtonProps } from "./types";

export default function ContactButton({
  onClick,
}: ContactButtonProps): JSX.Element {
  return (
    <Container>
      <CtButton onClick={onClick}>
        <Label>Contact me</Label>
      </CtButton>
    </Container>
  );
}
