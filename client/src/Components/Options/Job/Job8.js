import React from "react";
import Button from "@material-ui/core/Button";

const Job8 = (props) => {
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
        Health
      </Button>
    </div>
  );
};

export default Job8;
