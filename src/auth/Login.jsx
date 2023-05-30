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
function Login() {
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
              Login To Your Account <BsEmojiLaughing />
            </h4>
            <form className="py-3">
              <Row>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <button className="btn btn-dark text-light mb-4 loginWithBtn">
                    Login With Google
                    <BsGoogle className="m-2" />
                  </button>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  <button className="btn btn-primary text-light mb-4 loginWithBtn">
                    Login With Facebook
                    <BsFacebook className="m-2" />
                  </button>
                </Col>
              </Row>
              <div className="d-flex text-center">
                <div className="line"></div>
                <p className="px-3 text-dark">OR</p>
                <div className="line"></div>
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
                  type="submit"
                  name="login"
                  value="Login"
                  className="btn btn-danger form-control mb-3"
                />
              </div>
              <p>
                Don't have account yet?<Link to="/auth/signup">Signup</Link>
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

export default Login;
