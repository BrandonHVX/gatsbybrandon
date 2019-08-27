import React from "react"

import "./pages.css"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import TopNav from "../components/TopNav"
import AboutMe from "../components/AboutMe"
import Image from "../components/image"
import Brandonpic from "../images/BrandonPic.jpg"

import Lottie from "react-lottie"

import { Row, Col, Container, Jumbotron, Button } from "react-bootstrap"

import animationData from "../images/greeting.json"

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

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "",
  },
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
            <Col sm={8}>
              <Jumbotron style={jumbo}>
                {" "}
                <Lottie options={defaultOptions} width={440} />
                <p>
                  I'm a software engineer specialised in frontend and backend
                  development for complex scalable web apps. I write about
                  software development on my blog. Want to know how I may help
                  your project? Check out my project portfolio and online
                  resume.
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </Jumbotron>
            </Col>
            <Col sm={4}>
              {" "}
              <img src={Brandonpic} width={350} />{" "}
            </Col>
          </Row>{" "}
          <AboutMe />
        </Container>
      </div>
    </div>
  </Layout>
)

export default IndexPage
