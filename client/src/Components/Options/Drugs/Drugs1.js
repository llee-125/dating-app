import React from "react";
import Button from "@material-ui/core/Button";

const Drugs1 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleDrugs(props.value);
        }}
        disableElevation
      >
        Often
      </Button>
    </div>
  );
};

export default Drugs1;
