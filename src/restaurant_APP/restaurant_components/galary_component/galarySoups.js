import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const GalarySoups = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.soups} galaryName={"Soups..."}/>
    </div>
  )
}

export default GalarySoups