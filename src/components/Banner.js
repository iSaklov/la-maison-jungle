import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
  const title = 'La maison jungle'
  return (
    <div className="lmj-banner">
      <img src={logo} alt="logo de « La maison jungle »" className="lmj-logo" />
      <h1 className="lmj-title">{title}</h1>
    </div>
  )
}

export default Banner
