import React from "react";
import Button from "@material-ui/core/Button";

const WantOffspring2 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleWantOffspring(props.value);
        }}
        disableElevation
      >
        No
      </Button>
    </div>
  );
};

export default WantOffspring2;
