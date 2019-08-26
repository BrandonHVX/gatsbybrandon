import React, { Component } from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/Nav"
import TopNav from "../components/TopNav"
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

export default class AboutMe extends Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <Row style={text}>
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={js} width={40} />
              </span>
              <span>
                <img src={reactsvg} width={40} />
              </span>
              <span>
                <img src={vue} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={node} width={40} />
              </span>
              <span>
                <img src={npm} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={ruby} width={32} />
              </span>
              <span>
                <img src={rails} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <br />

          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={html5} width={40} />
              </span>
              <span>
                <img src={reactsvg} width={40} />
              </span>
              <span>
                <img src={bootstrap} width={40} />
              </span>
              <span>
                <img src={sass} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <br />
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={ps} width={40} />
              </span>
              <span>
                <img src={ai} width={40} />
              </span>
              <span>
                <img src={xd} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>

          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={pr} width={40} />
              </span>
              <span>
                <img src={ae} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
          <Col style={col} xs={6} md={4}>
            <p>
              <span>
                <img src={git} width={40} />
              </span>
              <span>
                <img src={slack} width={40} />
              </span>
            </p>
            List skills/technologies here. You can change the icon above to any
            of the 1500+ FontAwesome 5 free icons available. Aenean commodo
            ligula eget dolor.
          </Col>
        </Row>
      </div>
    )
  }
}
