import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const galaryRice = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.Rice} galaryName={"Rice..."}/>
    </div>
  )
}

export default galaryRice