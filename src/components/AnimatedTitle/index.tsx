import { JSX } from "react";
import { CAROUSEL_TITLE } from "./constants";
import { Body, Container, SubTitle, Title, TypewriterWrapper } from "./styled";
import Typewriter from "typewriter-effect";
import { Box } from "@mui/material";

export default function AnimatedTitle(): JSX.Element {
  return (
    <Container
      sx={{
        justifyContent: {
          lg: "start",
          md: "start",
          sm: "center",
          xs: "center",
        },
      }}
    >
      <Box
        sx={{
          fontSize: {
            lg: 125,
            md: 125,
            sm: 125,
            xs: 88,
          },
        }}
      >
        <Title>Hi</Title>
      </Box>
      <Body
        sx={{
          fontSize: {
            lg: 52,
            md: 52,
            sm: 52,
            xs: 30,
          },
        }}
      >
        <SubTitle>
          I am <br />
        </SubTitle>
        <TypewriterWrapper>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              strings: CAROUSEL_TITLE.map((i) => `<strong/>${i}</strong>`),
            }}
          />
        </TypewriterWrapper>
      </Body>
    </Container>
  );
}
