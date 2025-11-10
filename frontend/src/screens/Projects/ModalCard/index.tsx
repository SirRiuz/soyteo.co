import { SCAPE_KEY_CODE, STATE_COLOR_MAP } from "./constants";
import { Body, Container, Description, Header, Icon, Main } from "./styled";
import { ModalCardProps } from "./types";
import { JSX, useEffect } from "react";
import { Grid } from "@mui/material";
import StateIndicator from "./StateIndicator";
import Chip from "./Chip";

export default function ModalCard({
  index,
  cards,
  onClick,
}: ModalCardProps): JSX.Element {
  useEffect(() => {
    // Allows the modal to close when the 'Escape' key is pressed
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === SCAPE_KEY_CODE) onClick();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClick]);

  return (
    <Container id={cards[index].id} onClick={onClick}>
      <Grid
        container
        size={{
          lg: 4,
          md: 6,
          sm: 9,
          xs: 10,
        }}
      >
        <Body
          layoutId={cards[index].id}
          style={{ borderRadius: 5 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Header>
            <Chip>
              <StateIndicator color={STATE_COLOR_MAP[cards[index].state]} />
              <span style={{ fontSize: "13.5px", textTransform: "capitalize" }}>
                {cards[index].state}
              </span>
            </Chip>
          </Header>
          {index !== null && (
            <Main>
              <Icon src={cards[index].icon} />
              <Description>{cards[index].description}</Description>
            </Main>
          )}
        </Body>
      </Grid>
    </Container>
  );
}
