import React from 'react'
import jsonlist from "../../../json/restaurant_items.json"
import ReusesableMenuConponent from './reusesableMenuComponent'
import {INCREAMENTCART} from "../../restaurant_redux_management/restaurant_reducers/restaurantReducer1"


const menuIceCream = () => {
  return (
    <div>
         <ReusesableMenuConponent categoty={jsonlist.Ice_cream} menuName={"Ice Cream items..."} INCREAMENTCART = {INCREAMENTCART}  />
    </div>
  )
}

export default menuIceCream