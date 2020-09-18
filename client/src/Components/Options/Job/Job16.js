import React from "react";
import Button from "@material-ui/core/Button";

const Job16 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleJob(props.value);
        }}
        disableElevation
      >
        Transportation
      </Button>
    </div>
  );
};

export default Job16;
