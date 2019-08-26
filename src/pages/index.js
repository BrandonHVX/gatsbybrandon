import React from "react"
import { Link } from "gatsby"
import "./pages.css"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import TopNav from "../components/TopNav"
import AboutMe from "../components/AboutMe"
import Image from "../components/image"
import Brandonpic from "../images/BrandonPic.jpg"
import ae from "../images/ae.svg"
import ps from "../images/ps.svg"
import ai from "../images/ai.svg"
import xd from "../images/xd.svg"
import pr from "../images/Pr.svg"
import rails from "../images/rails.svg"
import sass from "../images/sass.svg"
import node from "../images/node.svg"
import slack from "../images/slack.svg"
import git from "../images/git.svg"
import npm from "../images/npm.png"
import vue from "../images/vuejs.svg"
import js from "../images/js.svg"
import ruby from "../images/ruby.png"
import html5 from "../images/html5.svg"
import bootstrap from "../images/bootstrap.svg"
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
                <h1>Brandon Gines</h1>
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
            <Col sm={6}>
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
