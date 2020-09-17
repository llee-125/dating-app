import React from "react";
import Button from "@material-ui/core/Button";

const WantOffspring3 = (props) => {
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
        Maybe
      </Button>
    </div>
  );
};

export default WantOffspring3;
