// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "../../Styles/Header.module.css";
import Account from "./Account";
import Search from "./Search";
import Cart from "./Cart";
import DeliveryLocation from "./DeliveryLocation";
import Orders from "./Orders";
import Logo from "./Logo";
import { Grid } from "@mui/material";

function Header() {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={styles.parentContainer}
      >
        <Grid item md={1} sm={1} xs={4} lg={1}>
          <Logo />
        </Grid>
        <Grid item md={2} sm={2} xs={4} lg={2}>
          <DeliveryLocation />
        </Grid>
        <Grid item md={5} sm={4} xs={12} lg={5} className={styles.Search}>
          <Search />
        </Grid>
        <Grid item md={2} sm={1} xs={4} lg={2}>
          <Account />
        </Grid>
        <Grid item md={1} sm={1} xs={4} lg={1}>
          <Orders />
        </Grid>
        <Grid item md={1} sm={1} xs={4} lg={1}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
