import React, { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleBlur() {
    if (!inputValue.includes('@')) {
      setErrorMessage(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      )
    } else {
      setErrorMessage('')
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </footer>
  )
}

export default Footer
