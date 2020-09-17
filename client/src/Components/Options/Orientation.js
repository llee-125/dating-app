import React from "react";
import Box from "@material-ui/core/Box";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Orientation1 from "../Options/Orientation/Orientation1";
import Orientation2 from "../Options/Orientation/Orientation2";
import Orientation3 from "../Options/Orientation/Orientation3";
import Orientation4 from "../Options/Orientation/Orientation4";
const Orientation = () => {
  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Box>
        <h1>What best describes your orientation?</h1>
        <Container fluid="md" className="text-center">
          <Row>
            <Row className="text-center">
              <Col xs={6} md={4}>
                <Orientation1
                  value="Straight"
                  handleOrientation={this.handleOrientationChange}
                ></Orientation1>
              </Col>
              <Col xs={6} md={4}>
                <Orientation2
                  value="Gay"
                  handleOrientation={this.handleOrientationChange}
                ></Orientation2>
              </Col>
              <Col xs={6} md={4}>
                <Orientation3
                  value="Bisexual"
                  handleOrientation={this.handleOrientationChange}
                ></Orientation3>
              </Col>
              <Col xs={6} md={4}>
                <Orientation4
                  value="Other"
                  handleOrientation={this.handleOrientationChange}
                ></Orientation4>
              </Col>
            </Row>
          </Row>
        </Container>
      </Box>
    </Box>
  );
};

export default Orientation;
