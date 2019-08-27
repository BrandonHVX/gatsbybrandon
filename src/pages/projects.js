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
         
      <AboutMe />     
           
        <ProjectsTabs />
         
        
      </Container>
    </div>
  </div>
</Layout>
)

export default SecondPage
