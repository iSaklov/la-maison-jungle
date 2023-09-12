import React, { useState, useCallback } from 'react'
import plantList from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('')
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  )

  const handleAddToCart = useCallback(
    (name, price) => {
      const currentPlantAdded = cart.find((plant) => plant.name === name)
      if (currentPlantAdded) {
        const cartFilteredCurrentPlant = cart.filter(
          (plant) => plant.name !== name
        )
        updateCart([
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantAdded.amount + 1 }
        ])
      } else {
        updateCart([...cart, { name, price, amount: 1 }])
      }
    },
    [cart, updateCart]
  )

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="lmj-plant-list">
        {plantList.map(
          ({ id, cover, name, price, description, water, light, category }) =>
            !activeCategory || activeCategory === category ? (
              <li key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  price={price}
                  description={description}
                  water={water}
                  light={light}
                  addToCart={handleAddToCart}
                />
              </li>
            ) : null
        )}
      </ul>
    </div>
  )
}

export default ShoppingList
