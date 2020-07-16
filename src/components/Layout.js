import React from "react";

import { Container, Row, Col } from "react-bootstrap";

function Layout() {
  return (
    <div>
      <Container>
        <Row className="rows">
          <Col className="columns">
            <div className="thebox">
              <p className="cardtext">asdasd</p>
            </div>
          </Col>
          <Col className="columns">Yeah</Col>
        </Row>
      </Container>
      <Row className="rows">
        <Col className="columns">This is Content</Col>
      </Row>
    </div>
  );
}

export default Layout;
