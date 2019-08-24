import React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopNav from "../components/TopNav"

const SecondPage = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />
        <h1>Hello Two</h1>
      </div>
    </div>
  </Layout>
)

export default SecondPage
