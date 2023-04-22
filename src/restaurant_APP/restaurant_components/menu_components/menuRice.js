import React from 'react'
import jsonlist from "../../../json/restaurant_items.json"
import ReusesableMenuConponent from './reusesableMenuComponent'
import {INCREAMENTCART} from "../../restaurant_redux_management/restaurant_reducers/restaurantReducer1"

const MenuRice = () => {
  return (
    <div>
         <ReusesableMenuConponent categoty={jsonlist.Rice} menuName={"Rice items..."} INCREAMENTCART = {INCREAMENTCART}  />
    </div>
  )
}

export default MenuRice