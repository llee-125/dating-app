import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

class DatePicker extends React.Component {
  state = {
    date: "",
  };
  getDate = (event) => {
    var value = event.target.value;
    console.log(value);
    this.props.handleDate(value);
  };
  // const useStyles = makeStyles((theme) => ({
  //   container: {
  //     display: "flex",
  //     flexWrap: "wrap",
  //   },
  //   textField: {
  //     marginLeft: theme.spacing(1),
  //     marginRight: theme.spacing(1),
  //     width: 200,
  //   },
  // }));
  render() {
    // const classes = useStyles();
    return (
      <form noValidate>
        <TextField
          id="date"
          type="date"
          onChange={this.getDate}
          value={this.state.date}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
    );
  }
}

export default DatePicker;
