import React from "react"

import Header from "../components/Header"
import globalStyles from "../theme/mainTheme.module.css"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={globalStyles.main}>{children}</main>
      <footer />
    </>
  )
}
