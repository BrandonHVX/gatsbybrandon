import React, { Component } from "react"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"

import linked from "../images/linked.svg"
import twitter from "../images/twitter.svg"
import git from "../images/git.svg"

import "./nav.css"

const social = {
  width: 50,
  marginRight: "5px",
}

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
            <img src={linked} style={social} />
            <img src={twitter} style={social} />
            <img src={git} style={social} />

            <li class="active">
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/resume"> Resume</Link>
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
