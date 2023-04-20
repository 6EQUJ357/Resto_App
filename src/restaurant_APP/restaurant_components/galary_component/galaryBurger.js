import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const GalaryBurger = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.Burger} galaryName={"Burger..."}/>
    </div>
  )
}

export default GalaryBurger