import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Container } from "react-bootstrap"
import "react-tabs/style/react-tabs.css"
import WebDev from "./WebDev"
import Videos from "./Videos"
import AboutMe from "./AboutMe"

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"

export default function MyTabs(props) {
  const [activeTab, setActiveTab] = useState("1")
  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={activeTab == "1" ? "active" : ""}
            onClick={() => setActiveTab("1")}
          >
            Tab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab == "2" ? "active" : ""}
            onClick={() => setActiveTab("2")}
          >
            Tab 2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AboutMe />
        </TabPane>
        <TabPane tabId="2">
          <WebDev />
        </TabPane>
      </TabContent>
    </div>
  )
}
