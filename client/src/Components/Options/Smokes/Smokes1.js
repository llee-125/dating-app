import React from "react";
import Button from "@material-ui/core/Button";

const Smokes1 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleSmokes(props.value);
        }}
        disableElevation
      >
        Yes
      </Button>
    </div>
  );
};

export default Smokes1;
