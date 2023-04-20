import React from 'react'
import jsonlist from "../../../json/restaurant_items.json"
import ReusesableMenuConponent from './reusesableMenuComponent'
import {INCREAMENTCART, DECREAMENTCART} from "../../restaurant_redux_management/restaurant_reducers/restaurantReducer1"


const MenuBurger = () => {
  return (
    <div>
         <ReusesableMenuConponent categoty={jsonlist.Burger} menuName={"Burger items..."} INCREAMENTCART = {INCREAMENTCART} DECREAMENTCART = {DECREAMENTCART} />
    </div>
  )
}

export default MenuBurger