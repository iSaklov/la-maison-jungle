import React from 'react'
import useModal from '../hooks/useModal'
import CareScale from './CareScale'
import Modal from './Modal'
import CustomButton from './UI/CustomButton'
import '../styles/PlantItem.css'

function PlantItem({
  cover,
  name,
  price,
  description,
  water,
  light,
  addToCart
}) {
  const { isShowing, toggle } = useModal()

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={toggle}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          toggle()
        }
      }}
      className="lmj-card"
    >
      <div className="lmj-card-image">
        <span className="lmj-card-price">{price}€</span>
        <img className="lmj-card-cover" src={cover} alt={`${name} cover`} />
      </div>
      <div className="lmj-card-content">
        <h2 className="lmj-card-title">{name}</h2>
        <div className="lmj-card-care-scales">
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
        <p className="lmj-card-description">
          {description.slice(0, 3).join('\n')}
        </p>
      </div>
      <div className="lmj-card-actions">
        <CustomButton
          variant="primary"
          onClickHandler={(event) => {
            event.stopPropagation()
            addToCart(name, price)
          }}
        >
          Ajouter
        </CustomButton>
        <CustomButton
          variant="secondary"
          className="lmj-card-button"
          onClick={toggle}
        >
          Voir plus
        </CustomButton>
      </div>
      <Modal isShowing={isShowing} hide={toggle}>
        <div className="modal-header">
          <div className="lmj-card-image">
            <span className="lmj-card-price">{price}€</span>
            <img className="" src={cover} alt={`${name} cover`} />
          </div>
          <h2>{name}</h2>
        </div>
        <div className="lmj-modal-content">
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
          <p className="lmj-modal-description">
            {description.slice().join('\n')}
          </p>
        </div>
        <div className="lmj-modal-actions">
          <CustomButton
            variant="primary"
            onClickHandler={() => addToCart(name, price)}
          >
            Ajouter
          </CustomButton>
        </div>
      </Modal>
    </div>
  )
}

export default PlantItem
