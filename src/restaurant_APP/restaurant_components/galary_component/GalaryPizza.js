import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const GalaryPizza = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.Pizza} galaryName={"Pizza..."}/>
    </div>
  )
}

export default GalaryPizza