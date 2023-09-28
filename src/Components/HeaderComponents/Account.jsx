import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Grid } from "@mui/material";
import styles from "../../Styles/Account.module.css";

function Account() {
  return (
    <Grid className={styles.account}>
      <Grid className={styles.accountHint}>Hello, Sign in</Grid>
      <Grid className={styles.accountTitle}>
        Account & Lists
        <ArrowDropDownIcon className={styles.accountarrow} />
      </Grid>
    </Grid>
  );
}

export default Account;
