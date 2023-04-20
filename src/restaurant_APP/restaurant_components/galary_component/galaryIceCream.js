import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const GalaryIceCream = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.Ice_cream} galaryName={"Ice Creams..."}/>
    </div>
  )
}

export default GalaryIceCream