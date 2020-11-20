import React from "react"
import ReactDOM from "react-dom"

import mainTheme from "../../theme/mainTheme.module.css"

export default function Modal({ visibility, handleClick, children }) {
  return visibility
    ? ReactDOM.createPortal(
        <div className={mainTheme.modal} onClick={handleClick}>
          {children}
        </div>,
        document.getElementsByTagName("body")[0]
      )
    : null
}
