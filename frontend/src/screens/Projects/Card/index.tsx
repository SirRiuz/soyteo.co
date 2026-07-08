import { JSX } from "react";
import { motion } from "framer-motion";
import { CardsProps } from "./types";
import { LAYOUT_SPRING } from "../types";
import { STATE_COLOR_MAP } from "../ModalCard/constants";

export default function Cards({ cards, setIndex }: CardsProps): JSX.Element {
  return (
    <>
      {cards.map((item, key) => (
        <motion.div
          key={key}
          transition={LAYOUT_SPRING}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0px 18px 45px rgba(47, 47, 47, 0.12)",
          }}
          style={{
            background: "hsla(0, 0%, 100%, 0.45)",
            border: "1px solid rgba(47, 47, 47, 0.06)",
            width: "350px",
            height: "350px",
            borderRadius: "16px",
            cursor: "pointer",
            position: "relative",

            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setIndex(key);
          }}
          layoutId={item.id}
          data-cursor="pointer"
        >
          <motion.div
            layoutId={`icon-${item.id}`}
            transition={LAYOUT_SPRING}
            role="img"
            aria-label={`${item.title} icon`}
            style={{
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "22.5%",
              height: "180px",
              width: "180px",
              backgroundImage: `url("${item.icon}")`,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <motion.span
              layoutId={`title-${item.id}`}
              transition={LAYOUT_SPRING}
              style={{
                fontSize: "19px",
                fontWeight: 600,
                color: "#2f2f2f",
                letterSpacing: "-0.01em",
              }}
            >
              {item.title}
            </motion.span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "12.5px",
                color: "#909090",
                textTransform: "capitalize",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: STATE_COLOR_MAP[item.state],
                }}
              />
              {item.state}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  );
}
