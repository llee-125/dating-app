import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Job18 = (props) => {
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
        Unemployed
      </Button>
    </div>
  );
};

export default Job18;
