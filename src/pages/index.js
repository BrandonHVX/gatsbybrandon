import React from "react"
import { Link } from "gatsby"
import "./pages.css"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import TopNav from "../components/TopNav"
import Image from "../components/image"
import Brandonpic from "../images/BrandonPic.jpg"
import SEO from "../components/seo"
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap"
import reactsvg from "../images/react.svg"
const text = {
  fontSize: "12px",
  marginTop: "20px",
}

const col = {
  marginTop: "20px",
}

const jumbo = {
  backgroundColor: "transparent ",
}

const IndexPage = () => (
  <Layout>
    <TopNav />
    <div>
      {" "}
      <div className="wrapper">
        <Nav />

        <Container>
          {" "}
          <Row>
            <Col sm={6}>
              <Jumbotron style={jumbo}>
                {" "}
                <h1>Hello, world!</h1>
                <p>
                  This is a simple hero unit, a simple jumbotron-style component
                  for calling extra attention to featured content or
                  information.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col sm={6}>
              {" "}
              <img src={Brandonpic} />{" "}
            </Col>
          </Row>
          <Row style={text}>
            <Col style={col} xs={6} md={4}>
              <p>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
              </p>
              List skills/technologies here. You can change the icon above to
              any of the 1500+ FontAwesome 5 free icons available. Aenean
              commodo ligula eget dolor.
            </Col>
            <br />
            <Col style={col} xs={6} md={4}>
              <p>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
              </p>
              List skills/technologies here. You can change the icon above to
              any of the 1500+ FontAwesome 5 free icons available. Aenean
              commodo ligula eget dolor.
            </Col>
            <br />
            <Col style={col} xs={6} md={4}>
              <p>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
              </p>
              List skills/technologies here. You can change the icon above to
              any of the 1500+ FontAwesome 5 free icons available. Aenean
              commodo ligula eget dolor.
            </Col>

            <Col style={col} xs={6} md={4}>
              <p>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
              </p>
              List skills/technologies here. You can change the icon above to
              any of the 1500+ FontAwesome 5 free icons available. Aenean
              commodo ligula eget dolor.
            </Col>
            <Col style={col} xs={6} md={4}>
              <p>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
              </p>
              List skills/technologies here. You can change the icon above to
              any of the 1500+ FontAwesome 5 free icons available. Aenean
              commodo ligula eget dolor.
            </Col>
            <Col style={col} xs={6} md={4}>
              <p>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
                <span>
                  <img src={reactsvg} width={40} />
                </span>
              </p>
              List skills/technologies here. You can change the icon above to
              any of the 1500+ FontAwesome 5 free icons available. Aenean
              commodo ligula eget dolor.
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </Layout>
)

export default IndexPage
