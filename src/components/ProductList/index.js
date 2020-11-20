import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Slider from "../common/Slider"
import productListStyles from "./productList.module.css"

export default function ProductList() {
  const {
    products: { nodes: products },
    content: { nodes: content },
  } = useStaticQuery(getData)

  return (
    <div className={productListStyles.Wrapper}>
      <div className={productListStyles.productListTextContainer}>
        <h3>{content[0].frontmatter.title}</h3>
        <p>{content[0].frontmatter.lead}</p>
      </div>
      <Slider products={products} />
    </div>
  )
}

export const getData = graphql`
  {
    content: allMarkdownRemark(filter: { frontmatter: { title: { ne: "" } } }) {
      nodes {
        frontmatter {
          title
          lead
        }
      }
    }
    products: allMarkdownRemark(
      filter: { frontmatter: { price: { ne: null } } }
    ) {
      nodes {
        frontmatter {
          name
          slug
          price
          excerpt
          image
          description
          tag
        }
      }
    }
  }
`
