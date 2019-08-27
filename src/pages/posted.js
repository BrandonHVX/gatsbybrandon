import React from "react"

import Nav from "../components/Nav"
import Layout from "../components/layout"

import TopNav from "../components/TopNav"

import { Container, Jumbotron, Button } from "react-bootstrap"

const jumbo = {
  backgroundColor: "transparent ",
  textAlign: "center",
}

const Posted = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />

        <Container>
          <Jumbotron style={jumbo}>
            {" "}
            <h1>Posted</h1>
          </Jumbotron>
          <div className="main"></div>{" "}
        </Container>
      </div>
    </div>
  </Layout>
)

export default Posted
