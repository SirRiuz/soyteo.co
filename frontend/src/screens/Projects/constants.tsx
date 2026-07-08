import { ARCHIVED_STATE, CardItemType, PRODUCTION_STATE } from "./types";
import Track from "../../assets/images/track.webp";
import Vivaldi from "../../assets/images/vivaldi.webp";
import Thiup from "../../assets/images/thiup.svg";
import Telephone from "../../assets/images/telephone.png";

const TELEPHONE_API_LINK = "https://telephone.soyteo.co/docs";
const TELEPHONE_GITHUB_URL = "https://github.com/SirRiuz/Telephone";

const TRACK_GITHUB_URL = "https://github.com/SirRiuz/Strack";
const VIVALDI_STORE_URL =
  "https://apkcombo.com/es/vivaldi-math-solver/com.sririuz.vivaldi.calculator/";
const THIUP_URL = "https://thiup.com/";

export const cards: CardItemType[] = [
  {
    id: "2",
    title: "Thiup",
    state: PRODUCTION_STATE,
    description: (
      <>
        <strong>Thiup</strong> is an anonymous, open-source social network
        focused on freedom of expression. Users can create and comment on posts
        freely and anonymously, promoting open dialogue across the web.
      </>
    ),
    color: "#a85432",
    icon: Thiup,
    links: [{ label: "Visit thiup.com", url: THIUP_URL }],
  },
  {
    id: "0",
    title: "Telephone API",
    state: PRODUCTION_STATE,
    description: (
      <>
        <strong>Telephone</strong> is an open-source API that uses Twilio to
        get detailed information about phone numbers, ready to explore through
        its interactive docs.
      </>
    ),
    color: "#e76f51",
    icon: Telephone,
    links: [
      { label: "Try the API docs", url: TELEPHONE_API_LINK },
      { label: "GitHub", url: TELEPHONE_GITHUB_URL },
    ],
  },
  {
    id: "3",
    title: "Vivaldi Math Solver",
    state: PRODUCTION_STATE,
    description: (
      <>
        <strong>Vivaldi</strong> is an open-source scientific calculator that
        solves complex operations, graphs functions in 2D and 3D, and shows
        step-by-step solutions. Perfect for learning and teaching math.
      </>
    ),
    color: "#e76f51",
    icon: Vivaldi,
    links: [{ label: "Get the app", url: VIVALDI_STORE_URL }],
  },
  // Archived projects always go last
  {
    id: "1",
    title: "Track",
    state: ARCHIVED_STATE,
    description: (
      <>
        <strong>Track</strong> is an open-source application that lets you
        track prices from various online stores like MercadoLibre, Amazon,
        eBay, and more. Perfect for comparing and following deals easily.
      </>
    ),
    color: "#F4A261",
    icon: Track,
    links: [{ label: "View on GitHub", url: TRACK_GITHUB_URL }],
  },
];
