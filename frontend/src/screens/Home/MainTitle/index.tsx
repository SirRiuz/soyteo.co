import ContactButton from "../../../components/ContactButton";
import GitHubButton from "../../../components/GitHubButton";
import AnimatedTitle from "../../../components/AnimatedTitle";
import ContactModal from "../ContactModal";
import {
  Availability,
  ButtonsWrapper,
  Container,
  PulsingDot,
  StackRow,
  Subtitle,
  TechChip,
} from "./styled";
import { JSX, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const STACK = ["React", "TypeScript", "Node.js", "Python", "FastAPI"];

// Center the hero content on small screens, left-align on desktop
const RESPONSIVE_JUSTIFY = {
  lg: "flex-start",
  md: "flex-start",
  sm: "center",
  xs: "center",
} as const;

function FadeUp({
  order,
  children,
}: {
  order: number;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * order, duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function MainTitle(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  return (
    <Container>
      <FadeUp order={0}>
        <Box
          sx={{
            display: "flex",
            justifyContent: RESPONSIVE_JUSTIFY,
            marginBottom: "22px",
          }}
        >
          <Availability>
            <PulsingDot />
            Open to new opportunities
          </Availability>
        </Box>
      </FadeUp>
      <FadeUp order={1}>
        <AnimatedTitle />
      </FadeUp>
      <FadeUp order={2}>
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
              Software engineer building scalable, production-grade products —
              from robust APIs to polished, animated interfaces.
            </Subtitle>
          </Box>
        </div>
      </FadeUp>
      <FadeUp order={3}>
        <ButtonsWrapper
          sx={{
            justifyContent: RESPONSIVE_JUSTIFY,
          }}
        >
          <ContactButton onClick={() => setShowMenu(true)} />
          <GitHubButton />
        </ButtonsWrapper>
      </FadeUp>
      <FadeUp order={4}>
        <StackRow
          sx={{
            justifyContent: RESPONSIVE_JUSTIFY,
            marginTop: "34px",
          }}
        >
          {STACK.map((tech) => (
            <TechChip key={tech}>{tech}</TechChip>
          ))}
        </StackRow>
      </FadeUp>
      {showMenu && <ContactModal onClose={() => setShowMenu(false)} />}
    </Container>
  );
}
