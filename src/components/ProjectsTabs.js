import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Container } from "react-bootstrap"
import "react-tabs/style/react-tabs.css"
import WebDev from "./WebDev"
import Videos from "./Videos"
import AboutMe from "./AboutMe"

const tabs = {
  backgroundColor: "transparent",
  color: "blue",
  borderColor: "blue",
  borderBottom: "blue",
}

export default function ProjectsTabs() {
  return (
    <div class="container">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
      </li>
    </ul>
  
   
    <div class="tab-content">
      <div id="home" class="container tab-pane active"><br/>
        <h3>HOME</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div id="menu1" class="container tab-pane fade"><br/>
        <h3>Menu 1</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div id="menu2" class="container tab-pane fade"><br/>
        <h3>Menu 2</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      </div>
    </div>
  </div>

  )
}
