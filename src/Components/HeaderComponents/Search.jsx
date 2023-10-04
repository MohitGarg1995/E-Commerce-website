// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import productsData from "../../Pages/Home/ProductsData.json";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSearch,
  updateCategory,
  updateSort,
} from "../../redux/reducers/searchSlice";
import {
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Popover,
} from "@mui/material";
import { TextField } from "@mui/material";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import styles from "../../Styles/Search.module.css";

function Search() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { search, category, sortOrder } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    dispatch(updateCategory(selectedCategory));
  };
  const handleSearchQuery = (event) => {
    dispatch(updateSearch(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(updateSort(event.target.value));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Grid container className={styles.filter}>
        <Grid item md={3} lg={3} xs={4} sm={6} className={styles.grid1}>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={category}
            onChange={handleCategory}
            displayEmpty
            autoWidth
            label="All Categories"
            inputProps={{ "aria-label": "Without label" }}
            className={styles.Select}
          >
            <MenuItem value="All" className={styles.MenuText1}>
              <Typography className={styles.typo1}>All Categories</Typography>
            </MenuItem>
            {Array.from(
              new Set(productsData.map((product) => product.category))
            ).map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item md={8} lg={8} xs={8} sm={6}>
          <TextField
            fullWidth
            placeholder="Search by name"
            id="outlined-multiline-static"
            value={search}
            onChange={handleSearchQuery}
            variant="standard"
            className={styles.searchText}
          />
        </Grid>

        <Grid item md={1} lg={1} xs={4} sm={6} className={styles.grid3}>
          <IconButton onClick={handleClick} size="large">
            <SortRoundedIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <FormControl className={styles.formwidth}>
              <Select
                labelId="sort-order-label"
                id="sort-order-select"
                value={sortOrder}
                onChange={handleOrder}
                className={styles.dropdownSort}
              >
                <MenuItem value="asc">Low to High</MenuItem>
                <MenuItem value="desc">High to Low</MenuItem>
              </Select>
            </FormControl>
          </Popover>
        </Grid>
      </Grid>
    </>
  );
}

export default Search;
