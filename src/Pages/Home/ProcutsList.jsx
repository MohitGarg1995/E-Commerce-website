// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import CustomCard from "./CustomCard";
import { Grid } from "@mui/material";
import productsData from "../Home/ProductsData.json";
import styles from "../../Styles/ProductsList.module.css";
import { useSelector } from "react-redux";

function ProcutsList() {
  const [products, setProducts] = useState(productsData);
  const { search, category, sortOrder } = useSelector((state) => state.search);

  function handleSearch(keyword) {
    const filteredProducts = productsData
      .filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
      .filter((product) => {
        if (category === "All") {
          return true; // Show all products when "All" is selected
        } else {
          return product.category === category;
        }
      })
      .sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
    setProducts(filteredProducts);
  }
  useEffect(() => {
    handleSearch(search);
  }, [search, category, sortOrder]);

  return (
    <>
      <Grid
        container
        item
        className={styles.mainContainer}
        justifyContent="space-between"
      >
        {products.map((product, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={7}
            md={5}
            lg={4}
            xl={3}
            className={styles.childContainer}
          >
            <CustomCard
              key={product.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              ratingValue={product.ratingValue}
              image={product.image}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProcutsList;

// for Categories........
// It first renders a static option for "All Categories" with a value of "All" to allow users to reset the filter.

// It uses Array.from(new Set(...)) to extract unique category values from your product data.

// It maps through the unique categories and renders an <option> element for each one, using the category name as both the key and the value prop.
