import React from "react";
import Button from "@material-ui/core/Button";

const HavePets2 = (props) => {
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
        Cats
      </Button>
    </div>
  );
};

export default HavePets2;
