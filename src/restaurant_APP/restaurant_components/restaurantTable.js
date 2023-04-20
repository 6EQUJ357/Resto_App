import React from 'react'
import "../restaurant_style.css"
import { Link } from 'react-router-dom'

const RestaurantTable = () => {
  const table = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

  return (
    <div className='tabb'>
      <div className='table_button_containersss'>
        <h1 className='table_h1'>select table</h1>
          {table.map((tab,index) => 
            <div key={index} className='table_button_container'>
            <button className='table_button' >{tab}</button>    
            </div>
          )}

          <Link to="/menu" style={{margin:"20px 40%" }} className='btn btn-primary'>go to menu</Link>
      </div>
      
    </div>
  )
}

export default RestaurantTable