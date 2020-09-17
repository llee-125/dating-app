import React from "react";
import Button from "@material-ui/core/Button";

const Drugs3 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleDrugs(props.value);
        }}
        disableElevation
      >
        Never
      </Button>
    </div>
  );
};

export default Drugs3;
