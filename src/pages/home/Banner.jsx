import React, {useState} from "react";
import {Container, Row, Col, Form, InputGroup} from "react-bootstrap";

function Banner() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Perform search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <Container fluid className="banner ms-auto">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={12}
            className="mt-5 text-light w-100 banner-container"
          >
            <h2 variant="h4">WELCOME TO BOSHUB</h2>
            <p>
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
            <InputGroup className="mb-5">
              <Form.Control
                placeholder="Search for a moviv, tv show or person....."
                aria-label="Search"
                aria-describedby="basic-addon2"
                onClick={handleSearchChange}
              />
              <button className="btn btn-dark py-2" onClick={handleSearchClick}>
                Search
              </button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Banner;
