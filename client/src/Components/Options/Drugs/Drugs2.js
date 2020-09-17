import React from "react";
import Button from "@material-ui/core/Button";

const Drugs2 = (props) => {
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
        Sometimes
      </Button>
    </div>
  );
};

export default Drugs2;
