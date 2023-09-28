// eslint-disable-next-line no-unused-vars
import React from "react";
import { Grid } from "@mui/material";
import styles from "../../Styles/Orders.module.css";

function Orders() {
  return (
    <Grid className={styles.orders}>
      <Grid className={styles.ordersHint}>Returns</Grid>
      <Grid className={styles.ordersTitle}>& Orders</Grid>
    </Grid>
  );
}

export default Orders;
