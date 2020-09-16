import React from "react";
import Button from "@material-ui/core/Button";

const Gender3 = (props) => {
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
        Non-conforming
      </Button>
    </div>
  );
};

export default Gender3;
