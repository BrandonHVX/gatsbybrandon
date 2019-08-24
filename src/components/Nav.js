import React, { Component } from "react"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"
import "./nav.css"

export default class Nav extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>
        <ul class="list-unstyled components">
          <p>
            <img src={Brandonpic} className="round-img" />{" "}
          </p>
          <li class="active">
            <Link to="/"> Home</Link>

            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/page-2">About</Link>

            <Link to="/page-3">Pages</Link>

            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
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
    )
  }
}
