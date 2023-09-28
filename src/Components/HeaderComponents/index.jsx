// eslint-disable-next-line no-unused-vars
import React from "react";
// import styles from "../../Styles/Header.module.css";
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
        md={12}
        sx={{ background: "black", width: "100%" }}
      >
        <Grid item xs={2} md={1}>
          <Logo />
        </Grid>
        <Grid item xs={2} md={2}>
          <DeliveryLocation />
        </Grid>
        <Grid
          item
          xs={2}
          md={5}
          sx={{
            borderRadius: "14px",
          }}
        >
          <Search />
        </Grid>
        <Grid item xs={2} md={2}>
          <Account />
        </Grid>
        <Grid item xs={2} md={1}>
          <Orders />
        </Grid>
        <Grid item xs={2} md={1}>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
