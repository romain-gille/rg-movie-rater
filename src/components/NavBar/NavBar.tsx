// Importing files from Material-UI
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@mui/material';
import React from 'react';

const className = "navbar";

const NavBar: React.FC = ()=> {
  return (
    <div className={`${className}__container`}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start"
            className={`${className}__button`}
            color="inherit" aria-label="menu">

          </IconButton>
          <Typography variant="h6" color="inherit">
            Geeks for Geeks
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
