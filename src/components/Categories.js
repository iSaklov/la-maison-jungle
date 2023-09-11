import React from 'react'
import CustomSelect from './UI/CustomSelect'
import CustomButton from './UI/CustomButton'
import '../styles/Categories.css'

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <CustomSelect
        options={categories}
        value={activeCategory}
        onChangeHandler={setActiveCategory}
      />
      <CustomButton
        variant="secondary"
        onClickHandler={() => setActiveCategory('')}
      >
        Réinitialiser
      </CustomButton>
    </div>
  )
}

export default Categories
