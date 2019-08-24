import React, { Component } from "react"
import MoblieNav from "./MoblieNav"

export default class TopNav extends Component {
  render() {
    return (
      <div>
        {" "}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
                <li class="nav-item active">
                  <li>{/* <MoblieNav /> */}</li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
