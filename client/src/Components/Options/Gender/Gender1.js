import React from "react";
import Button from "@material-ui/core/Button";

const Gender1 = (props) => {
  return (
    <div style={{ margin: "0px 0px 10px 0px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleGender(props.value);
        }}
        disableElevation
      >
        Female
      </Button>
    </div>
  );
};

export default Gender1;
