import React, { useState, useCallback } from 'react'
import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ cover, name, water, light, price }) {
  const [isModalVisible, setModalVisible] = useState(false)

  const toggleInfo = useCallback(() => {
    if (!isModalVisible) {
      setModalVisible(true)
    } else {
      setModalVisible(false)
    }
  }, [isModalVisible])

  return (
    <li style={{ cursor: 'pointer' }}>
      <div
        role="button"
        tabIndex={0}
        onClick={() => toggleInfo()}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            toggleInfo()
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
        {isModalVisible && (
          <div className="modal">
            `Vous voulez acheter 1 ${name}? Très bon choix 🌱✨`
          </div>
        )}
      </div>
    </li>
  )
}

export default PlantItem
