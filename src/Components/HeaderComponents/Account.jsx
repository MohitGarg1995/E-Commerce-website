import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Grid, Modal } from "@mui/material";
import styles from "../../Styles/Account.module.css";
import SigninModal from "./SigninModal";

function Account() {
  const [open, setOpen] = React.useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid className={styles.account}>
        <Grid className={styles.accountHint}>Hello, Sign in</Grid>
        <Grid className={styles.accountTitle} onClick={handleOpen}>
          Account & Lists
          <ArrowDropDownIcon className={styles.accountarrow} />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SigninModal />
      </Modal>
    </>
  );
}

export default Account;
