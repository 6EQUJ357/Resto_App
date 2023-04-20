import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    cartValues : [],
    cartPrize : 0
}

const RestaurantReducer1 = createSlice({
        name : "RestaurantReducer1",
        initialState,
    
        reducers : {
            INCREAMENTCART : (state, action)=>{
                state.cartValues.push(action.payload);

                let prise = state.cartValues.map(prise =>prise.productPrice);
                 state.cartPrize = prise.reduce((a,b) => a+b)
            },               

            DECREAMENTCART : (state, action) => {
                let index = state.cartValues.findIndex(state=> state.productName === action.payload.productName);

                if(index > -1) {
                state.cartValues.splice(index,1);
                }
                            
                let prise = state.cartValues.map(prise =>prise.productPrice);
                 state.cartPrize = prise.reduce((a,b) => a+b)
            }
        }

}) 

export const {INCREAMENTCART, DECREAMENTCART} = RestaurantReducer1.actions
export default RestaurantReducer1.reducer

