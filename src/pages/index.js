import React from "react"
import { Link } from "gatsby"
import "./pages.css"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import TopNav from "../components/TopNav"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <TopNav />
    <div>
      <div className="wrapper">
        <Nav />
        <h1>Hello home</h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
