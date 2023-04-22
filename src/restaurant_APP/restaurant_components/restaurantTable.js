import React from 'react'
import "../restaurant_style.css"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { TableCart } from '../restaurant_redux_management/restaurant_reducers/restaurantReducer1'

const RestaurantTable = () => {
  let dispatch = useDispatch()
  let tabnum = useSelector(state => state.RestaurantReducer1.tableNumber)
  
  const table = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

  let activeBtn = 'table_button_active';
  let inActiveBtn = 'table_button'

  const Table = async(tab)=> {
    await dispatch(TableCart(tab))
  }

  return (
    <div className='tabb'>
      <div className='table_button_containersss'>
        <h1 className='table_h1'>select table</h1>
          {table.map((tab,index) => 
            <div key={index} className='table_button_container'>
            <button className={tabnum ===tab ? activeBtn:inActiveBtn} onClick={()=>Table(tab)}>{tab}</button>    
            </div>
          )}

           {
           tabnum !== null ?
          <Link to="/menu" style={{margin:"20px 40%" }} className='btn btn-primary'>go to menu</Link>
          :
          alert("please select table number...")
            }
      </div>
      
    </div>
  )
}

export default RestaurantTable