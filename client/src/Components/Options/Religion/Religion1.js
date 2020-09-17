import React from "react";
import Button from "@material-ui/core/Button";

const Religion1 = (props) => {
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
        Agnosticism
      </Button>
    </div>
  );
};

export default Religion1;
