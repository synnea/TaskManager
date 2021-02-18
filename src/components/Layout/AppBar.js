import React,{ useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearAllIcon from '@material-ui/icons/ClearAll';

import '../../store/actionTypes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClearButtonClick = useCallback(
    () => (console.log("in onClearButton"), dispatch({ type: 'CLEAR_TASKS' }),
    [dispatch])
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Task Manager
          </Typography>
          <Button color="inherit" onClick={onClearButtonClick}><ClearAllIcon />Clear All</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}