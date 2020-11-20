import React, { useState } from "react"
import { navigate } from "gatsby"

import addToCard from "../../../utils/addToCard"
import { BasketContext } from "../../../contexts/basketContext"

import sliderStyles from "./slider.module.css"

// unfortunately I couldn't handle svg image generation
import dumySvg from "../../../assets/images/products/dumy.svg"
import leftArrow from "../../../assets/elements/left_arrow.svg"
import rightArrow from "../../../assets/elements/right_arrow.svg"

export default function Slider({ products }) {
  const [firstItemId, setFirstItemId] = useState(0)
  //I couldn't cope with Slider responsiveness :/
  return (
    <BasketContext.Consumer>
      {(basketContext) => (
        <div className={sliderStyles.slider}>
          <div>
            <button
              className={sliderStyles.arrow}
              onClick={() =>
                setFirstItemId(
                  getCorrectId({
                    firstItemId: firstItemId - 1,
                    productsLength: products.length,
                  })
                )
              }
            >
              <img src={leftArrow} alt="left arrow" />
            </button>
          </div>
          <GenerateCards
            products={products}
            firstItemId={firstItemId}
            setBasketItems={basketContext.setBasketItems}
            basketContext={basketContext}
          />
          <div>
            <button
              className={sliderStyles.arrow}
              onClick={() =>
                setFirstItemId(
                  getCorrectId({
                    firstItemId: firstItemId + 1,
                    productsLength: products.length,
                  })
                )
              }
            >
              <img src={rightArrow} alt="right arrow" />
            </button>
          </div>
        </div>
      )}
    </BasketContext.Consumer>
  )
}

const getCorrectId = ({ firstItemId, productsLength }) => {
  if (firstItemId === -1) return productsLength - 1
  if (firstItemId === productsLength) return 0
  return firstItemId
}
//a big mess
const GenerateCards = ({ firstItemId, products, basketContext }) => {
  let productsInSlider = []
  for (let i = firstItemId; productsInSlider.length < 4; i++) {
    if (i >= products.length) {
      i = 0
    }
    productsInSlider.push(products[i])
  }

  return productsInSlider.map((product) => (
    <div
      className={sliderStyles.box}
      onClick={() => navigate(`/${product.frontmatter.slug}`)}
      key={product.frontmatter.slug}
    >
      <div className={sliderStyles.overlay}></div>
      <div className={sliderStyles.slideImg}>
        <img src={dumySvg} alt="product image" />
      </div>
      <div className={sliderStyles.detailBox}>
        <div className={sliderStyles.type}>
          <a href="#">{product.frontmatter.name}</a>
          <span>{product.frontmatter.excerpt}</span>
        </div>
      </div>
      <button
        className={sliderStyles.addButton}
        onClick={(e) => {
          e.stopPropagation()
          addToCard({ basketContext, item: product.frontmatter })
        }}
      >
        +
      </button>
    </div>
  ))
}
