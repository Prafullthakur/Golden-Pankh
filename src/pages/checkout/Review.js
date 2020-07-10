import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({ state }) {
  const classes = useStyles();

  console.log(state);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        New Product Summary
      </Typography>
      <Grid container spacing={2}>
        {Object.keys(state).map((key) => (
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              {key}
            </Typography>
            <Typography gutterBottom>{state[key]}</Typography>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}