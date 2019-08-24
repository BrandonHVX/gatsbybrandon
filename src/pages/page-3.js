import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Nav from "../components/Nav"
import TopNav from "../components/TopNav"

const ThirdPage = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />
        <h1>Hello Three</h1>
      </div>
    </div>
  </Layout>
)

export default ThirdPage
