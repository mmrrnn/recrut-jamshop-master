import React from "react"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import ProductList from "../components/ProductList"

import { BasketContextProvider } from "../contexts/basketContext"

export default function IndexPage() {
  return (
    <BasketContextProvider>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <ProductList />
      </Layout>
    </BasketContextProvider>
  )
}
