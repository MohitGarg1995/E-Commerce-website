// eslint-disable-next-line no-unused-vars
import React from "react";
import BrandLogo from "../../images/amazon-logoss.png";
import { Grid } from "@mui/material";
import styles from "../../Styles/Logo.module.css";

function Logo() {
  return (
    <>
      <Grid>
        <img alt="Amazon" src={BrandLogo} className={styles.logo} />
      </Grid>
    </>
  );
}

export default Logo;
