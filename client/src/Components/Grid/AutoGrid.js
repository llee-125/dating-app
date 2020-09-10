import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" disableElevation>
            Female
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" disableElevation>
            Male
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" disableElevation>
            Trans female
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" disableElevation>
            Trans male
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" disableElevation>
            Non-conforming
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="primary" disableElevation>
            Other
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default AutoGrid;
