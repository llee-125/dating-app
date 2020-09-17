import React from "react";
import Button from "@material-ui/core/Button";

const Education6 = (props) => {
  return (
    <div style={{ margin: "1px 1px 1px 1px" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.handleEducation(props.value);
        }}
        disableElevation
      >
        Law school
      </Button>
    </div>
  );
};

export default Education6;
