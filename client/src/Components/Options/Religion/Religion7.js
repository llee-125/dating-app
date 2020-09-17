import React from "react";
import Button from "@material-ui/core/Button";

const Religion7 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleReligion(props.value);
        }}
        disableElevation
      >
        Judaism
      </Button>
    </div>
  );
};

export default Religion7;
