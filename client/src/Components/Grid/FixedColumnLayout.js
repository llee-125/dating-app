import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = (theme) => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

const FixedColumnLayout = withStyles(styles)(({ classes, width }) => (
  <div className={classes.root}>
    {" "}
    <Grid container spacing={4}>
      {" "}
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
      <Grid item xs={6}>
        {" "}
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
      <Grid item xs={6}>
        {" "}
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
      <Grid item xs={6}>
        {" "}
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
      <Grid item xs={6}>
        {" "}
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
      <Grid item xs={6}>
        {" "}
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
      <Grid item xs={6}>
        {" "}
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
      <Grid item xs={6}>
        {" "}
        <Paper className={classes.paper}>xs=6</Paper>{" "}
      </Grid>{" "}
    </Grid>
  </div>
));

export default FixedColumnLayout;
