import React from "react";
import Button from "@material-ui/core/Button";

const Ethnicity4 = (props) => {
  return (
    <div style={{ margin: "0px 0px 10px 0px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleEthnicity(props.value);
        }}
        disableElevation
      >
        Hispanic/Latino
      </Button>
    </div>
  );
};

export default Ethnicity4;