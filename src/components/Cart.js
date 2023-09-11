import React, { useState } from 'react'
import Button from './UI/Button'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )

  return isOpen ? (
    <div className="lmj-cart">
      <Button variant="secondary" onClickHandler={() => setIsOpen(false)}>
        Fermer
      </Button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }) => (
              <div key={`${name}-${amount}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total :{total}€</h3>
          <Button variant="secondary" onClickHandler={() => updateCart([])}>
            Vider le panier
          </Button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <Button variant="primary" onClickHandler={() => setIsOpen(true)}>
        Ouvrir le Panier
      </Button>
    </div>
  )
}

export default Cart
