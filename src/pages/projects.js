import React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/TopNav"
import ProjectsTabs from "../components/ProjectsTabs"
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap"
import Brandonpic from "../images/BrandonPic.jpg"

const jumbo = {
  backgroundColor: "transparent ",
  textAlign: "center",
}

const SecondPage = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />

        <Container>
          <Jumbotron style={jumbo}>
            {" "}
            <h1>PROJECTS</h1>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <div className="main">
            <ProjectsTabs />
          </div>{" "}
        </Container>
      </div>
    </div>
  </Layout>
)

export default SecondPage
