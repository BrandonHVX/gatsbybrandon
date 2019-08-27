import React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/TopNav"

import { Container, Jumbotron } from "react-bootstrap"

const jumbo = {
  backgroundColor: "transparent ",
  textAlign: "center",
}

const Synergy = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />

        <Container>
          <Jumbotron style={jumbo}>
            {" "}
            <h1>Synergy</h1>
          </Jumbotron>
          <div className="main"></div>{" "}
        </Container>
      </div>
    </div>
  </Layout>
)

export default Synergy
