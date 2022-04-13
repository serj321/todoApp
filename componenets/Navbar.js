import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { auth, signOut } from "../firebase";
import Link from "next/link";
import styled from "styled-components";

const PaddedLink = styled.span`
  padding-right: 1em;
`;
// Navbar which is bult with material ui Components.
const Navbar = () => {
  const logout = () => {
    signOut(auth).then().catch(alert);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <PaddedLink><Link href="/">Todos</Link></PaddedLink>
            <PaddedLink><Link href="/new">New Todo</Link></PaddedLink>
          </Typography>
          <Button color="inherit" onClick={logout}>
            Signout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};



export default Navbar;
