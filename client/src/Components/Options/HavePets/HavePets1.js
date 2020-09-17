import React from "react";
import Button from "@material-ui/core/Button";

const HavePets1 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleHavePets(props.value);
        }}
        disableElevation
      >
        Dogs
      </Button>
    </div>
  );
};

export default HavePets1;
