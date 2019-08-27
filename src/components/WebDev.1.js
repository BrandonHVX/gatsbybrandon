import React, { Component } from "react"
import { Card, Row, Col, Container, Jumbotron, Button } from "react-bootstrap"
import nyxlogo from "../images/nyx-logo.png"
import synlogo from "../images/syn-logo.png"
import postedlogo from "../images/posted-logo.png"

export default class WebDev extends Component {
  render() {
    return (
      <div>
        {" "}
        <Row>
          {" "}
          <Col sm={6} className="row-hover">
            <div class="row">
              <div class="col-md-4 ">
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
          <Col sm={6} className="row-hover">
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

                <h6 class="font-weight-normal">
                  Social Media App Designed to connect users in search of their
                  next workout partner.
                </h6>
              </div>
            </div>{" "}
          </Col>
        </Row>
        <Row>
          <Col sm={6} className="row-hover">
            <div class="row">
              <div class="col-md-4 ">
                <div class="view-overlay">
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
                  Top Stories news site from New York Times Api
                </h6>
              </div>
            </div>{" "}
          </Col>
        </Row>
      </div>
    )
  }
}
