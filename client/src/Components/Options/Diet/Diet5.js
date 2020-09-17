import React from "react";
import Button from "@material-ui/core/Button";

const Diet5 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleDiet(props.value);
        }}
        disableElevation
      >
        Halal
      </Button>
    </div>
  );
};

export default Diet5;
