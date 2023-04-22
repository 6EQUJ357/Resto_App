import React from 'react'
import jsonlist from "../../../json/restaurant_items.json"
import ReusesableMenuConponent from "./reusesableMenuComponent"
import {INCREAMENTCART} from "../../restaurant_redux_management/restaurant_reducers/restaurantReducer1"

const MenuBiryani = () => {
  return (
    <div>
        <ReusesableMenuConponent categoty={jsonlist.Biryani} menuName={"Biryani items..."} INCREAMENTCART = {INCREAMENTCART} />
    </div>
  )
}

export default MenuBiryani