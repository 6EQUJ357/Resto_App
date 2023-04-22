import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    cartValues : [],
    cartPrize : 0,
    tableNumber : null
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
               
               state.cartValues.splice(index, 1)
                 
               if(state.cartValues.length >0) {
                let prise = state.cartValues.map(prise =>prise.productPrice);
                 state.cartPrize = prise.reduce((a,b) => a+b)
               }
               

                
            },

            TableCart :(state, action) => {
                state.tableNumber = action.payload
            }
        }

}) 

export const {INCREAMENTCART, DECREAMENTCART, TableCart} = RestaurantReducer1.actions
export default RestaurantReducer1.reducer

