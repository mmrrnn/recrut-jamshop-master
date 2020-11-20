import React from "react"
import { Link } from "gatsby"

import Basket from "./Basket"
import headerStyles from "./header.module.css"

export default function Header() {
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.brandContainer}>
        <Link to="/">JAM SHOP</Link>
      </div>
      <Basket />
    </header>
  )
}
