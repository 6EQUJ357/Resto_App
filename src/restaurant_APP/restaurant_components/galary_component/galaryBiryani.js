import React from 'react'
import GalaryReUseableComponent from './galaryReUseableComponent'
import jsonItems from "../../../json/restaurant_items.json"

const GalaryBiryani = () => {
  return (
    <div>
        <GalaryReUseableComponent categoty={jsonItems.Biryani} galaryName={"Biryani..."}/>
    </div>
  )
}

export default GalaryBiryani