import React, { Component } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"

export default class TopNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <div class="card testimonial-card">
              <div class="card-up info-color"></div>

              <div class="avatar mx-auto white">
                <img
                  src={Brandonpic}
                  width={200}
                  class="rounded-circle img-fluid"
                />
              </div>
              <div class="card-body">
                <li class="active">
                  <Link to="/">About Me</Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>

                <li>
                  <Link to="/page-3">Resume</Link>
                </li>
                <hr />

                <p class="dark-grey-text mt-4">
                  <i class="fa fa-quote-left pr-2"></i>Lorem ipsum dolor sit
                  amet eos adipisci, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
