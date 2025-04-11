import { JSX } from "react";
import { motion } from "framer-motion";
import { CardsProps } from "./types";

export default function Cards({ cards, setIndex }: CardsProps): JSX.Element {
  return (
    <>
      {cards.map((item, key) => (
        <motion.div
          key={key}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 0.95,
            color: "#f7f7f7",
          }}
          style={{
            background: "hsla(0,0%,77%,.2)",
            width: "350px",
            height: "350px",
            borderRadius: "5px",
            cursor: "pointer",
            position: "relative",

            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setIndex(key);
          }}
          layoutId={item.id}
        >
          <div
            style={{
              backgroundPosition: "50%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              borderRadius: "22.5%",
              height: "230px",
              width: "230px",
              backgroundImage: `url(${item.icon})`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}
