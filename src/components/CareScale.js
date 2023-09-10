import React from 'react'
// import useModal from '../hooks/useModal'
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
import '../styles/CareScale.css'

const quantityLabel = {
  1: 'peu',
  2: 'modérément',
  3: 'beaucoup'
}

function CareScale({ careType, scaleValue }) {
  const range = [1, 2, 3]

  const scaleType =
    careType === 'light' ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    )

  return (
    <div
      title={`Cette plante requiert ${quantityLabel[scaleValue]} ${
        careType === 'light' ? 'de lumière' : "d'arrosage"
      }`}
      className="care-scale"
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  )
}

export default CareScale
