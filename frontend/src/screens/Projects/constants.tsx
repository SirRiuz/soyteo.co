import { CardItemType } from "./types";
import Track from "../../assets/images/track.webp";
import Vivaldi from "../../assets/images/vivaldi.webp";
import Thiup from "../../assets/images/thiup.webp";

const VIVALDI_STORE_URL =
  "https://apkcombo.com/es/vivaldi-math-solver/com.sririuz.vivaldi.calculator/";
const THIUP_URL = "https://thiup.com/";

export const cards: CardItemType[] = [
  {
    id: "0",
    title: "Vivaldi Math Solver",
    description: (
      <>
        <a target="_blank" href={VIVALDI_STORE_URL} style={{ color: "black" }}>
          <strong>Vivaldi</strong>
        </a>{" "}
        is an open-source scientific calculator that solves complex operations,
        graphs functions in 2D and 3D, and shows step-by-step solutions. Perfect
        for learning and teaching math.
      </>
    ),
    color: "#e76f51",
    icon: Vivaldi,
  },
  {
    id: "1",
    title: "Track",
    description: (
      <>
        <a
          target="_blank"
          href="https://github.com/SirRiuz/Strack"
          style={{ color: "black" }}
        >
          <strong>Track</strong>
        </a>{" "}
        is an open-source application that lets you track prices from various
        online stores like MercadoLibre, Amazon, eBay, and more. Perfect for
        comparing and following deals easily.
      </>
    ),
    color: "#F4A261",
    icon: Track,
  },
  {
    id: "2",
    title: "Thiup.com",
    description: (
      <>
        <a target="_blank" href={THIUP_URL} style={{ color: "black" }}>
          <strong>Thiup.com</strong>
        </a>{" "}
        is an anonymous, open-source social network focused on freedom of
        expression. Users can create and comment on posts freely and
        anonymously, promoting open dialogue across the web.
      </>
    ),
    color: "#e9c46a",
    icon: Thiup,
  },
];
