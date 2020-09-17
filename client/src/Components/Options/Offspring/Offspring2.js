import React from "react";
import Button from "@material-ui/core/Button";

const Offspring2 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleOffspring(props.value);
        }}
        disableElevation
      >
        No
      </Button>
    </div>
  );
};

export default Offspring2;
