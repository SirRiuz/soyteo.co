import { JSX } from "react";
import { Container, GhButton, Label } from "./styled";
import { GITHUB_PROFILE_URL } from "./constants";
import { Box } from "@mui/material";
import GitHubSvg from "../../assets/github.svg";

export default function GitHubButton(): JSX.Element {
  const handleClick = () =>
    window.open(GITHUB_PROFILE_URL, "_blank", "noopener");

  return (
    <Container>
      <GhButton onClick={handleClick}>
        <img src={GitHubSvg} />
      </GhButton>
      <Box
        sx={{
          display: {
            lg: "block",
            md: "block",
            sm: "block",
            xs: "none",
          },
        }}
      >
        <Label>Github</Label>
      </Box>
    </Container>
  );
}
