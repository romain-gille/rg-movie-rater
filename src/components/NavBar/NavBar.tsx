// Importing files from Material-UI

import {
  AppBar,
  Box,
  Input,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const className = "navbar";
export interface Props {
  handleSearchChange: (newSearch: string) => void;
}

const NavBar: React.FC<Props> = ({ handleSearchChange }) => {
  return (
    <AppBar position="sticky" className={`${className}__container`}>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          RG Movie List
        </Typography>
        <Box sx={{ m: 1 }} />
        <Input
          margin="dense"
          className={`${className}__search`}
          placeholder="Search for a movie"
          onChange={(e) => handleSearchChange(e.target.value!)}
          color="primary"
        />
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
