import React from "react";
import Button from "@material-ui/core/Button";

const Ethnicity3 = (props) => {
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
        East Asian
      </Button>
    </div>
  );
};

export default Ethnicity3;
