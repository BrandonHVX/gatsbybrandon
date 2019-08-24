import React, { Component } from "react"
import { Link } from "gatsby"
import Brandonpic from "../images/BrandonPic.jpg"

export default class MoblieNav extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
            <div class="well profile">
              <div class="col-sm-12">
                <div class="col-xs-12 col-sm-8">
                  {" "}
                  <img src={Brandonpic} className="round-img" />
                  <h2>Brandon Gines</h2>
                  <p>
                    <strong>About: </strong> Web Designer / UI.{" "}
                  </p>
                  <p>
                    <strong>Hobbies: </strong> Read, out with friends, listen to
                    music, draw and learn new things.{" "}
                  </p>
                  <p>
                    <li class="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/page-2">Page2</Link>
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
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
