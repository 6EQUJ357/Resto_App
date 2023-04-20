import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const GalaryBeverages = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.Beverages} galaryName={"Beverages..."}/>
    </div>
  )
}

export default GalaryBeverages