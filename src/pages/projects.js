import React from "react"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import TopNav from "../components/TopNav"
import ProjectsTabs from "../components/ProjectsTabs"
import { Container, Jumbotron } from "react-bootstrap"

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
            <h1>Projects</h1>
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
