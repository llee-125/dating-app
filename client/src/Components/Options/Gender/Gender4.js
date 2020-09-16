import React from "react";
import Button from "@material-ui/core/Button";

const Gender4 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleGender(props.value);
        }}
        disableElevation
      >
        Other
      </Button>
    </div>
  );
};

export default Gender4;
