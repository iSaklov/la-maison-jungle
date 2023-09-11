import React from 'react'
import Button from './UI/Button'
import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <Button variant="secondary" onClickHandler={() => setActiveCategory('')}>
        Réinitialiser
      </Button>
    </div>
  )
}

export default Categories
