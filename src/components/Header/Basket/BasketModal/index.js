import React from "react"

import basketStyles from "./basketModal.module.css"
import mainStyles from "../../../../theme/mainTheme.module.css"
// unfortunately I couldn't handle svg image generation
import dumySvg from "../../../../assets/images/products/dumy.svg"

export default function BasketModal({ basketContext }) {
  const { basketItems } = basketContext

  return (
    <div
      className={basketStyles.basketModal}
      onClick={(e) => e.stopPropagation()}
    >
      <ul>
        <GenerateBasketItems basketItems={basketItems} />
      </ul>
      <button className={mainStyles.buttonPrimary}>SUBMIT</button>
    </div>
  )
}

const GenerateBasketItems = ({ basketItems }) => {
  return basketItems.map((item) => (
    <li className={basketStyles.cardItem} key={item.product.slug}>
      <img src={dumySvg} alt={item.product.name} />
      <span>
        {item.product.name} #{item.amount}
      </span>
      <span>${item.product.price * item.amount}</span>
    </li>
  ))
}
