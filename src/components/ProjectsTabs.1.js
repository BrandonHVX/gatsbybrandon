import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Container } from "react-bootstrap"
import "react-tabs/style/react-tabs.css"
import WebDev from "./WebDev"
import Videos from "./Videos"

const tabs = {
  backgroundColor: "transparent",
  color: "blue",
  borderColor: "blue",
  borderBottom: "blue",
}

export default function ProjectsTabs() {
  return (
    <Container>
      {" "}
      <Tabs>
        <TabList>
          <Tab style={tabs}>Web Development</Tab>
          <Tab>Video Production</Tab>
          <Tab>Digital Design</Tab>
          <Tab>Motion Graphics</Tab>
        </TabList>

        <TabPanel>
          <h2>Web Development</h2>
          <WebDev />
        </TabPanel>
        <TabPanel>
          <h2>Video Production</h2>
          <Videos />
        </TabPanel>
        <TabPanel>
          <h2>Digital Design</h2>
        </TabPanel>
        <TabPanel>
          <h2>Motion Graphics</h2>
        </TabPanel>
      </Tabs>
    </Container>
  )
}
