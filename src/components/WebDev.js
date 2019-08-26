import React, { Component } from "react"
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap"
import Brandonpic from "../images/BrandonPic.jpg"
import nyxlogo from "../images/nyx-logo.png"
import synlogo from "../images/syn-logo.png"
import postedlogo from "../images/posted-logo.png"

export default class WebDev extends Component {
  render() {
    return (
      <div>
        {" "}
        <Row>
          <Col sm={6}>
            <div class="row">
              <div class="col-md-4 ">
                <div class="view overlay"></div>

                <img src={postedlogo} />
              </div>

              <div class="col-md-7 text-md-left ml-3 mt-3">
                <a href="#!" class="green-text">
                  <h6 class="h6 pb-1">
                    <i class="fas fa-desktop pr-1"></i> Posted
                  </h6>
                </a>

                <h6 class="font-weight-normal">
                  Full stack web application desgined for users to create, like
                  and comment on posts.
                </h6>
              </div>
            </div>{" "}
          </Col>
          <Col sm={6}>
            <div class="row">
              <div class="col-md-4 ">
                <div class="view overlay">
                  <img src={synlogo} />
                  <a>
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
              </div>

              <div class="col-md-7 text-md-left ml-3 mt-3">
                <a href="#!" class="green-text">
                  <h6 class="h6 pb-1">
                    <i class="fas fa-desktop pr-1"></i> Synergy
                  </h6>
                </a>

                <h6 class="h6 mb-4">This is title of the news</h6>

                <h6 class="font-weight-normal">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                </h6>
              </div>
            </div>{" "}
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <div class="row">
              <div class="col-md-4 ">
                <div class="view overlay">
                  <img src={nyxlogo} />
                </div>
              </div>

              <div class="col-md-7 text-md-left ml-3 mt-3">
                <a href="#!" class="green-text">
                  <h6 class="h6 pb-1">
                    <i class="fas fa-desktop pr-1"></i> NYX News
                  </h6>
                </a>

                <h6 class="font-weight-normal">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae vitae
                </h6>
              </div>
            </div>{" "}
          </Col>
        </Row>
      </div>
    )
  }
}
