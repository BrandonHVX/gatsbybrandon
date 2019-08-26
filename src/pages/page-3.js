import React from "react"
import { Link } from "gatsby"
import res from "../images/res.svg"
import Layout from "../components/layout"
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap"
import SEO from "../components/seo"
import Nav from "../components/Nav"
import TopNav from "../components/TopNav"

const jumbo = {
  backgroundColor: "transparent ",
  textAlign: "center",
}

const ThirdPage = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />
        <Container>
          <Jumbotron style={jumbo}>
            {" "}
            <h1>Resume</h1>
          </Jumbotron>

          <img src={res} />
        </Container>
      </div>
    </div>
  </Layout>
)

export default ThirdPage
