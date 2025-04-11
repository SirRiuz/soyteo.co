import { ModalCardProps } from "./types";
import { Grid } from "@mui/material";
import { Body, Container, Description } from "./styled";
import React from "react";

export default function ModalCard({ index, cards, onClick }: ModalCardProps) {
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
          style={{ borderRadius: "10px" }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {index !== null && (
            <React.Fragment>
              <img
                src={cards[index].icon}
                style={{ width: "230px", height: "230px" }}
              />
              <Description>{cards[index].description}</Description>
            </React.Fragment>
          )}
        </Body>
      </Grid>
    </Container>
  );
}
