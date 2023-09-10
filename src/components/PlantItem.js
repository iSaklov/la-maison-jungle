import React from 'react'
import useModal from '../hooks/useModal'
import CareScale from './CareScale'
import Modal from './Modal'
import '../styles/PlantItem.css'

function PlantItem({ cover, name, water, light, price }) {
  const { isShowing, toggle } = useModal()

  return (
    <li style={{ cursor: 'pointer' }}>
      <div
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            toggle()
          }
        }}
        className="lmj-plant-item"
      >
        <span className="lmj-plant-item-price">{price}€</span>
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
        {name}
        <div>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
        <Modal isShowing={isShowing} hide={toggle}>
          <p>{`Vous voulez acheter 1 ${name}? Très bon choix 🌱✨`}</p>
        </Modal>
      </div>
    </li>
  )
}

export default PlantItem
