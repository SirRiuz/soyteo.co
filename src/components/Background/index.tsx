import { JSX } from "react";
import { Container } from "./styled";
import Bg from "../../assets/images/bg.png";

export default function Background(): JSX.Element {
  return <Container style={{ backgroundImage: `url(${Bg})` }} />;
}
