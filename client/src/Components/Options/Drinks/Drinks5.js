import React from "react";
import Button from "@material-ui/core/Button";

const Drinks5 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleDrinks(props.value);
        }}
        disableElevation
      >
        Rarely
      </Button>
    </div>
  );
};

export default Drinks5;
