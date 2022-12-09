import React from "react";
import { Outlet, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Layout() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4">Books</Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button color="inherit">
                <Link to="/">Home</Link>
              </Button>
              <Button color="inherit">
                <Link to="add/">Add new Book</Link>
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <h1 class="navbar-brand">Books</h1>

        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/New">Add new Book</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
    </div>
  );
}

export default Layout;
