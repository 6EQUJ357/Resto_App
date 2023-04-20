import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const galaryFastFood = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.Fast_food} galaryName={"Fast Food..."}/>
    </div>
  )
}

export default galaryFastFood