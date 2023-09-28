// eslint-disable-next-line no-unused-vars
import React from "react";
import MUICard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import styles from "../../Styles/CustomCard.module.css";

const CustomCard = ({ name, price, rating, image, ratingValue }) => {
  return (
    <MUICard className={styles.cards}>
      <CardContent>
        <Typography className={styles.name}>{name}</Typography>
        <Typography className={styles.price}>
          <CurrencyRupeeIcon className={styles.priceIcon} />
          {price}
        </Typography>
        <Grid className={styles.rating}>
          <Grid>
            <Rating
              name="product-rating"
              value={rating}
              precision={0.1}
              readOnly
              className={styles.ratings}
            />
          </Grid>
          <Grid className={styles.ratPad1}>{ratingValue}</Grid>
          <Grid className={styles.ratPad}>Ratings</Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Grid className={styles.textalign}>
          <img src={image} style={{ maxWidth: "60%" }} />
        </Grid>
      </CardContent>

      <Grid className={styles.btn1}>
        <Button className={styles.btn}>Add to Cart</Button>
      </Grid>
    </MUICard>
  );
};

CustomCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ratingValue: PropTypes.string.isRequired,
};
export default CustomCard;
