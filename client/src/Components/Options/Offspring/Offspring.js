import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function Offspring() {
  const classes = useStyles();
  const [offspring, setOffspring] = React.useState("");

  const handleChange = (event) => {
    setOffspring(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Children</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={offspring}
          onChange={handleChange}
        >
          <MenuItem value={0}>None</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4+</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Offspring;
