import React, { Component } from "react"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faFacebook,
  fabFaLinkedin,
} from "@fortawesome/free-solid-svg-icons"
import "./nav.css"

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav id="sidebar">
          <div class="sidebar-header">
            <img src={Brandonpic} className="round-img" />
          </div>

          <ul class="list-unstyled components">
            <p>Dummy Heading</p>
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={fabFaLinkedin} />
            <li class="active">
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/page-3"> Resume</Link>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
