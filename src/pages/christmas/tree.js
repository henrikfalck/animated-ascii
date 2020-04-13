import React from "react"
import Layout from "../../components/layout"
import ChristmasTree from "../../components/ascii/christmastree/tree.js"
import Container from "../../components/ascii/asciiContainer/index"

const ChristmasTreePage = () => (
  <Layout>
    <Container>
      <ChristmasTree />
    </Container>
  </Layout>
)

export default ChristmasTreePage
