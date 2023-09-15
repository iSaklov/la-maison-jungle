import React, { useState } from 'react'
import useModal from '../hooks/useModal'
import Modal from './Modal'
import Telegram from '../assets/icons/fa6-brands_telegram.svg'
import Linkedin from '../assets/icons/mdi_linkedin.svg'
import Mail from '../assets/icons/material-symbols_mail-rounded.svg'
import GitHub from '../assets/icons/mdi_github.svg'
import '../styles/Footer.css'

function Footer() {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { isShowing, toggle } = useModal()

  function handleInput(e) {
    setInputValue(e.target.value)
  }

  function handleBlur() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (!emailPattern.test(inputValue)) {
      setErrorMessage("Attention, l'adresse email n'est pas valide 😥")
      toggle()
    } else {
      setErrorMessage('')
    }
  }

  return (
    <footer className="lmj-footer">
      <p className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
        <br />
        et inspiré·e·s par{' '}
        <a
          href="https://openclassrooms.com/fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Openclassrooms
        </a>
      </p>
      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input
        placeholder="Entrez votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={handleBlur}
      />
      {errorMessage && (
        <Modal isShowing={isShowing} hide={toggle}>
          <div>{errorMessage}</div>
        </Modal>
      )}

      <p>Design & development: iSaklov</p>
      <ul className="lmj-reseted-list">
        <li className="lmj-list-item">
          <a
            href="mailto:ivansaklov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Mail}
              alt="Email address of the site developer"
              aria-label="Email address of the site developer"
              className="lmj-icon"
            />
          </a>
        </li>
        <li className="lmj-list-item">
          <a
            href="https://t.me/iSaklov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Telegram}
              alt="Telegram profile of the site developer"
              aria-label="Telegram profile of the site developer"
              className="lmj-icon"
            />
          </a>
        </li>
        <li className="lmj-list-item">
          <a
            href="https://github.com/iSaklov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHub}
              alt="GitHub profile of the site developer"
              aria-label="GitHub profile of the site developer"
              className="lmj-icon"
            />
          </a>
        </li>
        <li className="lmj-list-item">
          <a
            href="https://www.linkedin.com/in/aleh-smaliakou/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Linkedin}
              alt="LinkedIn profile of the site developer"
              aria-label="LinkedIn profile of the site developer"
              className="lmj-icon"
            />
          </a>
        </li>
      </ul>
      <p>© 2023 All rights of ideas and jokes are protected.</p>
    </footer>
  )
}

export default Footer
