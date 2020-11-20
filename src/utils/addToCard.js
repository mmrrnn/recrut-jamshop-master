export default function addToCard({ basketContext, item }) {
  const { basketItems, setBasketItems } = basketContext
  const basketItemId = basketItems.findIndex(
    (basketElement) => basketElement.product.slug === item.slug
  )

  if (basketItemId !== -1) {
    let basketItemsArray = basketItems
    basketItemsArray[basketItemId].amount += 1

    setBasketItems(basketItemsArray)
  } else {
    setBasketItems([...basketItems, { product: item, amount: 1 }])
  }
}
