import React from 'react'

function Button({ variant, children }) {
  return (
    <button
      className={`wrapper ${variant}`}
    >
      {children}
    </button>
  )
}
export default Button
