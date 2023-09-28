// eslint-disable-next-line no-unused-vars
import React from "react";
import ProcutsList from "./ProcutsList";
import { Grid } from "@mui/material";
import SwipeableCarousel from "./SwipeableCarousel";
import styles from "../../Styles/Homeindex.module.css";

function HomePage() {
  return (
    <>
      <Grid>
        <SwipeableCarousel />
      </Grid>
      <Grid container className={styles.ProcutsListComp}>
        <ProcutsList />
      </Grid>
    </>
  );
}

export default HomePage;
