import React, { Component } from "react"

import nyxlogo from "../images/nyx-logo.png"
import synlogo from "../images/syn-logo.png"
import postedlogo from "../images/posted-logo.png"
import { Link } from "gatsby"
const isotope = {
  position: "relative",
  height: "1000px",
}

const moblie = {
  position: "absolute",
  left: "0px",
  top: "0px",
}

export default class WebDev extends Component {
  render() {
    return (
      <section class="projects-list px-3 py-8 p-md-8">
        <div>
          <div class="project-cards row isotope">
            <div class="isotope-item col-md-6 mb-8 webapp frontend">
              <div class="card project-card">
                <div class="row no-gutters ">
                  <div class="col-lg-4 card-img-holder">
                    <img src={postedlogo} class="card-img" alt="image" />
                  </div>
                  <div class="col-lg-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="project.html" class="theme-link">
                          Posted
                        </a>
                      </h5>
                      <p class="card-text">
                        Project intro lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Cum sociis natoque penatibus et magnis
                        dis parturient montes.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Client: Google</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <a class="link-mask-link" href="project.html"></a>
                  <div class="link-mask-text">
                    <Link class="btn btn-secondary" to="/posted">
                      <i class="fas fa-eye mr-2"></i>View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotope-item col-md-6 mb-8 webapp frontend">
              <div class="card project-card">
                <div class="row no-gutters">
                  <div class="col-lg-4 card-img-holder">
                    <img src={synlogo} class="card-img" alt="image" />
                  </div>
                  <div class="col-lg-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="project.html" class="theme-link">
                          Synergy
                        </a>
                      </h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Client: Dropbox</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <a class="link-mask-link" href="project.html"></a>
                  <div class="link-mask-text">
                    <Link class="btn btn-secondary" to="/synergy">
                      <i class="fas fa-eye mr-2"></i>View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="isotope-item col-md-6 mb-8 mobileapp">
              <div class="card project-card">
                <div class="row no-gutters">
                  <div class="col-lg-4 card-img-holder">
                    <img src={nyxlogo} class="card-img" alt="image" />
                  </div>
                  <div class="col-lg-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="project.html" class="theme-link">
                          NYX News
                        </a>
                      </h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus.{" "}
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Client: Google</small>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="link-mask">
                  <a class="link-mask-link" href="project.html"></a>
                  <div class="link-mask-text">
                    <Link class="btn btn-secondary" to="/nyxnews">
                      <i class="fas fa-eye mr-2"></i>View Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
