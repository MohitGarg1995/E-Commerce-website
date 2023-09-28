// eslint-disable-next-line no-unused-vars
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "../../Styles/Cart.module.css";
import { Grid, Typography } from "@mui/material";

function Cart() {
  return (
    <>
      <Grid container className={styles.parentGrid}>
        <ShoppingCartOutlinedIcon className={styles.cart} />
        <Typography className={styles.cartTypo}>Cart</Typography>
      </Grid>
    </>
  );
}

export default Cart;
