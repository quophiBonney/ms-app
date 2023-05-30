import React from "react";
import {Container, Row, Col, Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";
import Collection from "../assets/collectofmovies.jpg";
import {
  BsEmojiLaughing,
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsTiktok,
  BsWhatsapp,
} from "react-icons/bs";
function Signup() {
  return (
    <div className="auth-container">
      <Container fluid className="mt-5">
        <Row className="justify-content-center">
          <Col
            sm={12}
            md={12}
            lg={6}
            className="px-3 mt-5 text-dark text-center"
          >
            <h4 className="mt-4 mb-3 text-uppercase">
              Complete Your Signup <BsEmojiLaughing />
            </h4>
            <p>Experience no dull moment with our collection of movies.</p>
            <form className="py-3">
              <div className="form-group">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  className="form-control mb-3"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="form-control mb-3"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control mb-3"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  className="form-control mb-3"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  name="signup"
                  value="signup"
                  className="btn btn-danger form-control mb-3"
                />
              </div>
              <p>
                Already have an account?<Link to="/auth/login">Login</Link>
              </p>
            </form>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <Carousel indicators={false} controls={false}>
              <Carousel.Item interval={1000}>
                <img
                  src={Collection}
                  alt=""
                  className="img-fluid img-responsive"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={Collection}
                  alt=""
                  className="img-fluid img-responsive"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={Collection}
                  alt=""
                  className="img-fluid img-responsive"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={Collection}
                  alt=""
                  className="img-fluid img-responsive"
                />
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  src={Collection}
                  alt=""
                  className="img-fluid img-responsive service-img"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
