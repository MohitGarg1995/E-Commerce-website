// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Modal, Button, TextField, Grid, Typography } from "@mui/material";

const Index = () => {
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
