import { configureStore } from "@reduxjs/toolkit";
import RestaurantReducer1 from "./restaurant_reducers/restaurantReducer1"

const RestaurantStore = configureStore({
    reducer :{
        RestaurantReducer1 : RestaurantReducer1
    }
})

export default RestaurantStore