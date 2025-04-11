import { JSX } from "react";
import { Grid } from "@mui/material";
import { IllustrationWrapper, Img } from "./styled";
import Illustration from "../../assets/images/illustration.png";
import MainTitle from "./MainTitle";

export default function Home(): JSX.Element {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        height: {
          lg: "auto",
          md: "auto",
          sm: "100vh",
          xs: "100vh",
        },
      }}
    >
      <Grid
        marginTop={{
          lg: 0,
          md: 0,
          sm: "120px",
          xs: "50px",
        }}
        size={{
          lg: 6,
          md: 6,
          sm: 10,
          xs: 12,
        }}
      >
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
        <IllustrationWrapper>
          <Img src={Illustration} />
        </IllustrationWrapper>
      </Grid>
    </Grid>
  );
}
