import React from "react";
import Button from "@material-ui/core/Button";

const Offspring1 = (props) => {
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
        Yes
      </Button>
    </div>
  );
};

export default Offspring1;
