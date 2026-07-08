import { SCAPE_KEY_CODE, STATE_COLOR_MAP } from "./constants";
import {
  Actions,
  Body,
  CloseButton,
  Container,
  Description,
  FadeIn,
  Header,
  Icon,
  Main,
  PrimaryLink,
  SecondaryLink,
  Title,
} from "./styled";
import { ModalCardProps } from "./types";
import { JSX, useEffect } from "react";
import { Grid } from "@mui/material";
import { LAYOUT_SPRING } from "../types";
import StateIndicator from "./StateIndicator";
import Chip from "./Chip";

// Modal-only content waits for the shared-element morph, then floats in
const FADE_IN_PROPS = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.12, duration: 0.24, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
} as const;

function ExternalArrow(): JSX.Element {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export default function ModalCard({
  index,
  cards,
  onClick,
}: ModalCardProps): JSX.Element {
  const card = cards[index];

  useEffect(() => {
    // Allows the modal to close when the 'Escape' key is pressed
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === SCAPE_KEY_CODE) onClick();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClick]);

  return (
    <Container id={card.id} onClick={onClick}>
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
          layoutId={card.id}
          style={{ borderRadius: 16 }}
          transition={LAYOUT_SPRING}
        >
          <Header {...FADE_IN_PROPS}>
            <Chip>
              <StateIndicator color={STATE_COLOR_MAP[card.state]} />
              <span style={{ fontSize: "13px", textTransform: "capitalize" }}>
                {card.state}
              </span>
            </Chip>
            <CloseButton onClick={onClick} data-cursor="pointer">
              ✕
            </CloseButton>
          </Header>
          <Main>
            <Icon
              layoutId={`icon-${card.id}`}
              transition={LAYOUT_SPRING}
              src={card.icon}
              alt={`${card.title} icon`}
            />
            <Title layoutId={`title-${card.id}`} transition={LAYOUT_SPRING}>
              {card.title}
            </Title>
            <FadeIn {...FADE_IN_PROPS}>
              <Description>{card.description}</Description>
              {card.links && card.links.length > 0 && (
                <Actions>
                  {card.links.map((link, key) => {
                    const LinkComponent =
                      key === 0 ? PrimaryLink : SecondaryLink;
                    return (
                      <LinkComponent
                        key={key}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        {link.label}
                        <ExternalArrow />
                      </LinkComponent>
                    );
                  })}
                </Actions>
              )}
            </FadeIn>
          </Main>
        </Body>
      </Grid>
    </Container>
  );
}
