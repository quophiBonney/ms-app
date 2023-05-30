import React from "react";
import {Container, Row, Col} from "react-bootstrap";
function Footer() {
  return (
    <Container fluid className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={12}
            className="text-center text-light mt-5  mb-5"
          >
            <p>
              All rights reserved &copy; 2023
              <br />
              This movie streaming platform is designed and engineered by&nbsp;
              <strong>Solomon Bonney(Dev Bonney)</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
