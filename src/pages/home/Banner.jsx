import React, {useState} from "react";
import {Container, Row, Col, Form, InputGroup} from "react-bootstrap";
function Banner({handleSearch}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <Container fluid className="banner ms-auto">
      <Container
        className="mt-5"
        data-aos="slide-right"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
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
                placeholder="Search for a movie, tv show or person....."
                aria-label="Search"
                aria-describedby="basic-addon2"
                onChange={handleSearchChange}
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
