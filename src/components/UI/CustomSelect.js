import React from 'react'
import '../../styles/CustomSelect.css'

function CustomSelect({ options, value, onChangeHandler }) {
  return (
    <select
      value={value}
      onChange={(e) => onChangeHandler(e.target.value)}
      className="custom-select"
    >
      <option value="">-----</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default CustomSelect
