import React from "react";
import Button from "@material-ui/core/Button";

const Diet6 = (props) => {
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
        Other
      </Button>
    </div>
  );
};

export default Diet6;
