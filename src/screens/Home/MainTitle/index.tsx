import ContactButton from "../../../components/ContactButton";
import GitHubButton from "../../../components/GitHubButton";
import AnimatedTitle from "../../../components/AnimatedTitle";
import ContactModal from "../ContactModal";
import { ButtonsWrapper, Container, Subtitle } from "./styled";
import { JSX, useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function MainTitle(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    <Container>
      <AnimatedTitle />
      <div style={{ marginBottom: "25px" }}>
        <Box
          sx={{
            fontSize: {
              lg: 22,
              md: 22,
              sm: 22,
              xs: 17,
            },
            textAlign: {
              lg: "start",
              md: "start",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Subtitle>
            I am a software engineer , passionate about new challenges and
            creating software
          </Subtitle>
        </Box>
      </div>
      <ButtonsWrapper
        sx={{
          justifyContent: {
            lg: "flex-start",
            md: "flex-start",
            sm: "center",
            xs: "center",
          },
        }}
      >
        <ContactButton onClick={() => setShowMenu(true)} />
        <GitHubButton />
      </ButtonsWrapper>
      {showMenu && <ContactModal onClose={() => setShowMenu(false)} />}
    </Container>
  );
}
