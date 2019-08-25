import React, { Component } from "react"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"
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
            <li class="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>

            <li>
              <Link to="/page-3"> Page3</Link>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          <ul class="list-unstyled CTAs">
            <li>
              <a
                href="https://bootstrapious.com/tutorial/files/sidebar.zip"
                class="download"
              >
                Download source
              </a>
            </li>
            <li>
              <a
                href="https://bootstrapious.com/p/bootstrap-sidebar"
                class="article"
              >
                Back to article
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
