import React from 'react';
import clsx from 'clsx';
import { AppBar, Badge, Container, Drawer, Divider, Grid, IconButton, List, Paper,
  Toolbar, Typography, }
  from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';
import { mainListItems, secondaryListItems } from './listItems';
import useStyles from './styleSheet';

export default function App({ match: { params } }){
  const classes = useStyles();
  const [open, setSideBar] = React.useState(true);
  const handleDrawerOpen = () => { setSideBar(true); };
  const handleDrawerClose = () =>  { setSideBar(false); };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return(
    <div className={classes.root}>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="Open drawer" onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Todo List */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <AddTodo />
              </Paper>
            </Grid>
            {/* @nd grid - fixed layout */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Footer filter={params.filter || 'SHOW_ALL'}/>
              </Paper>
            </Grid>
            {/* Third grid flexible in height */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
