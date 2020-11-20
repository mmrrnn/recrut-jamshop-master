import React from "react"

import Layout from "../layouts"
import SEO from "../components/SEO"
import addToCard from "../utils/addToCard"
import { BasketContext, BasketContextProvider } from "../contexts/basketContext"

import mainTheme from "../theme/mainTheme.module.css"
import productStyles from "../theme/product.module.css"

import dumySvg from "../assets/images/products/dumy.svg"

export default function Products({ pathContext }) {
  const { product } = pathContext

  return (
    <BasketContextProvider>
      <Layout>
        <SEO title="Home" />
        <BasketContext.Consumer>
          {(basketContext) => (
            <div className={productStyles.wrapper}>
              <div className={productStyles.productImageContainer}>
                <img src={dumySvg} alt="Product image" />
              </div>
              <div className={productStyles.productContentContainer}>
                <span>{product.tag}</span>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
                <button
                  className={mainTheme.buttonPrimary}
                  onClick={() => addToCard({ basketContext, item: product })}
                >
                  ADD TO CARD
                </button>
              </div>
            </div>
          )}
        </BasketContext.Consumer>
      </Layout>
    </BasketContextProvider>
  )
}
