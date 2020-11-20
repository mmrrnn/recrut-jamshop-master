import React, { useState } from "react"

import { BasketContext } from "../../../contexts/basketContext"
import Modal from "../../common/Modal"
import BasketModal from "./BasketModal"
import headerStyles from "../header.module.css"

import basket from "../../../assets/elements/basket.svg"

export default function Basket() {
  const [modalVisibility, setModalVisibility] = useState(false)

  const showModal = (basketContext) => {
    if (basketContext.basketItems.length) {
      setModalVisibility(!modalVisibility)
    }
  }

  return (
    <BasketContext.Consumer>
      {(basketContext) => (
        <div
          className={headerStyles.basketContainer}
          onClick={() => showModal(basketContext)}
        >
          <img
            src={basket}
            alt="Shopping Basket"
            className={headerStyles.basket}
          />
          <div className={headerStyles.basketNumber}>
            {countBasketItems(basketContext.basketItems)}
          </div>
          <Modal visibility={modalVisibility}>
            <BasketModal basketContext={basketContext} />
          </Modal>
        </div>
      )}
    </BasketContext.Consumer>
  )
}

const countBasketItems = (basketItems) => {
  const basketAmounts = basketItems.map((e) => e.amount)

  if (basketItems.length < 2) return basketItems[0]?.amount || 0
  return basketAmounts.reduce((a, b) => a + b)
}
