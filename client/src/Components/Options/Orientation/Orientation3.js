import React from "react";
import Button from "@material-ui/core/Button";

const Orientation3 = (props) => {
  return (
    <div style={{ margin: "0px 0px 10px 0px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleOrientation(props.value);
        }}
        disableElevation
      >
        Bisexual
      </Button>
    </div>
  );
};

export default Orientation3;
