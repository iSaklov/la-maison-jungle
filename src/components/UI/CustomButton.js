import React from 'react'
import '../../styles/CustomButton.css'

function CustomButton({ variant, onClickHandler, ariaLabel, children }) {
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={onClickHandler}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default CustomButton
