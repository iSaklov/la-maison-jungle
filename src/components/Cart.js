import React, { useState } from 'react'
import CustomButton from './UI/CustomButton'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false)
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  )

  return isOpen ? (
    <div className="lmj-cart">
      <CustomButton variant="secondary" onClickHandler={() => setIsOpen(false)}>
        Fermer
      </CustomButton>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul className="lmj-cart-list">
            {cart.map(({ name, price, amount }) => (
              <div key={`${name}-${amount}`}>
                {name} {price}€ x {amount}
              </div>
            ))}
          </ul>
          <h3>Total : {total}€</h3>
          <CustomButton variant="primary">Régler la commande</CustomButton>
          <CustomButton
            variant="secondary"
            onClickHandler={() => updateCart([])}
          >
            Vider le panier
          </CustomButton>
        </div>
      ) : (
        <div className="lmj-empty-cart">
          <p>Votre panier est vide :-(</p>
        </div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <CustomButton variant="primary" onClickHandler={() => setIsOpen(true)}>
        Ouvrir le Panier
      </CustomButton>
    </div>
  )
}

export default Cart
