import React, { useState, useCallback } from 'react'
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
  1: 'peu',
  2: 'modérément',
  3: 'beaucoup'
}

function CareScale({ scaleValue, careType }) {
  const [isModalVisible, setModalVisible] = useState(false)
  const range = [1, 2, 3]

  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    )

  const handleClick = useCallback(
    (event) => {
      event.stopPropagation()
      if (!isModalVisible) {
        setModalVisible(true)
      } else {
        setModalVisible(false)
      }
    },
    [isModalVisible]
  )

  const handleKeyPress = useCallback(
    (event) => {
      event.stopPropagation()
      if (event.key === 'Enter') {
        setModalVisible(true)
      } else {
        setModalVisible(false)
      }
    },
    [setModalVisible]
  )

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      style={{ cursor: 'pointer' }}
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
      {isModalVisible && (
        <div className="modal">
          Cette plante requiert {quantityLabel[scaleValue]}{' '}
          {careType === 'light' ? 'de lumière' : "d'arrosage"}
        </div>
      )}
    </div>
  )
}

export default CareScale
