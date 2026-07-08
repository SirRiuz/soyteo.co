import { JSX } from "react";
import { Grid } from "@mui/material";
import MainTitle from "./MainTitle";
import TerminalCard from "./TerminalCard";

export default function Home(): JSX.Element {
  return (
    <Grid
      container
      component="section"
      justifyContent={"center"}
      sx={{
        height: "auto",
      }}
    >
      <Grid
        marginTop={{
          lg: 0,
          md: 0,
          sm: "36px",
          xs: "12px",
        }}
        size={{
          lg: 6,
          md: 6,
          sm: 10,
          xs: 12,
        }}
      >
        <h1 className="sr-only">
          Mateo Jiménez — Full-Stack Software Engineer (React, TypeScript,
          Node.js, Python)
        </h1>
        <MainTitle />
      </Grid>
      <Grid
        flexDirection={"column"}
        justifyContent={"center"}
        alignContent={"center"}
        alignItems={"center"}
        size={{
          lg: 6,
          md: 6,
          sm: 0,
          xs: 0,
        }}
        sx={{
          display: {
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <TerminalCard />
      </Grid>
    </Grid>
  );
}
