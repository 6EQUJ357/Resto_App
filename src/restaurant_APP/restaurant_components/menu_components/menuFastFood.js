import React from 'react'
import jsonlist from "../../../json/restaurant_items.json"
import ReusesableMenuConponent from './reusesableMenuComponent'
import {INCREAMENTCART} from "../../restaurant_redux_management/restaurant_reducers/restaurantReducer1"


const MenuFastFood = () => {
  return (
    <div>
        <ReusesableMenuConponent categoty={jsonlist.Fast_food} menuName={"Fast Food items..."} INCREAMENTCART = {INCREAMENTCART} />
    </div>
  )
}

export default MenuFastFood