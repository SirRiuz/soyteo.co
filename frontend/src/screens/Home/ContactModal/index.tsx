import { JSX } from "react";
import { Container, Description, Modal, Send, Title } from "./styled";
import { ContactModalProps } from "./types";
import { Grid } from "@mui/material";
import AnimatedScreen from "../../../components/AnimatedScreen";

export default function ContactModal({
  onClose,
}: ContactModalProps): JSX.Element {
  return (
    <>
      <AnimatedScreen onClick={onClose} />
      <Modal onClick={onClose}>
        <Grid
          onClick={(e) => e.stopPropagation()}
          sx={{ zIndex: 99 }}
          container
          size={{
            lg: 4,
            md: 5,
            sm: 7,
            xs: 12,
          }}
        >
          <Container
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <Title placeholder="Email subject" />
            <Description placeholder="Write your message here..." />
            <Send>Send email</Send>
          </Container>
        </Grid>
      </Modal>
    </>
  );
}
