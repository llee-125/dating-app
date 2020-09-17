import React from "react";
import Button from "@material-ui/core/Button";

const Drinks2 = (props) => {
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
        Very often
      </Button>
    </div>
  );
};

export default Drinks2;
