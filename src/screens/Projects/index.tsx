import { JSX, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import Cards from "./Card";
import ModalCard from "./ModalCard";
import { cards } from "./constants";
import AnimatedScreen from "../../components/AnimatedScreen";

export default function Projects(): JSX.Element {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflowY = index === null ? "scroll" : "hidden";
  }, [index]);

  return (
    <Grid container justifyContent={"center"} gap={2}>
      <LayoutGroup>
        <AnimatePresence>
          <Cards cards={cards} setIndex={setIndex} />
          {index !== null && <AnimatedScreen onClick={() => setIndex(null)} />}
          {index !== null && (
            <ModalCard
              key="singlecard"
              index={index}
              cards={cards}
              onClick={() => setIndex(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Grid>
  );
}
