import React from "react";
import Button from "@material-ui/core/Button";

const Diet2 = (props) => {
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
        Vegetarian
      </Button>
    </div>
  );
};

export default Diet2;
