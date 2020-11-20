import React, { useState, useEffect } from "react"

export const BasketContext = React.createContext({
  basketItems: [],
  setBasketItems: () => {},
})

export const BasketContextProvider = ({ children }) => {
  useEffect(() => {
    const basketItemsLocalStorage = JSON.parse(
      localStorage.getItem("basketItems")
    )
    if (basketItemsLocalStorage) {
      setState({ ...state, basketItems: basketItemsLocalStorage })
    }
  }, [])

  const setBasketItems = (basketItems) => {
    setState({ ...state, basketItems })
    localStorage.setItem("basketItems", JSON.stringify(basketItems))
  }

  const initState = {
    basketItems: [],
    setBasketItems,
  }

  const [state, setState] = useState(initState)

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  )
}
