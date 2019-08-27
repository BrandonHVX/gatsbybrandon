import React from "react"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import TopNav from "../components/TopNav"
import ProjectsTabs from "../components/ProjectsTabs"
import { Col, Row, Container, Jumbotron, Button } from "react-bootstrap"
import AboutMe from "../components/AboutMe"
import Brandonpic from "../images/BrandonPic.jpg"
import Lottie from "react-lottie"
import animationData from "../images/greeting.json"
const jumbo = {
  backgroundColor: "transparent ",
  textAlign: "center",
}

const SecondPage = () => (
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

export default SecondPage
