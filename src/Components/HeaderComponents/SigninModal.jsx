// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Modal, Button, TextField, Grid, Typography } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { signinUser } from "../../redux/reducers/userSlice";

const Index = () => {
  // const Index = ({ show, handleClose, openSignUp }) => {
  // const [formData, setFormData] = useState({ email: "", password: "" });

  // const { user } = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // const handleSignIn = (e) => {
  //   e.preventDefault();
  //   if (formData && formData.email && formData.password) {
  //     dispatch(signinUser(formData));
  //   }
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // useEffect(() => {
  //   if (user && Object.keys(user).length) {
  //     handleClose();
  //   }
  // }, [user]);

  return (
    <>
      <Modal>
        {/* <Modal open={show} onClose={handleClose}> */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} md={6} lg={4}>
            <div
              style={{
                padding: "16px",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h5" align="center">
                Sign In
              </Typography>
              <form>
                {/* <form onSubmit={handleSignIn}> */}
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleChange}
                  variant="outlined"
                  margin="normal"
                  required
                />
                <Grid container justifyContent="flex-end" spacing={1}>
                  <Grid item>
                    <Button variant="outlined" size="small">
                      {/* <Button variant="outlined" size="small" onClick={openSignUp}> */}
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      type="submit"
                      size="small"
                      variant="contained"
                      color="primary"
                    >
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default Index;
