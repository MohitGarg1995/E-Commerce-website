// eslint-disable-next-line no-unused-vars
import React from "react";
import { Grid } from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import styles from "../../Styles/DeliveryLocation.module.css";

function DeliveryLocation() {
  return (
    <Grid className={styles.deliverylocation}>
      <RoomOutlinedIcon size={4} className={styles.Icon} />
      <Grid className={styles.deliveryLocationDetails}>
        <Grid className={styles.deliveryLocationHint}>Hello</Grid>
        <Grid className={styles.deliveryLocationTitle}>
          Select your address
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DeliveryLocation;
