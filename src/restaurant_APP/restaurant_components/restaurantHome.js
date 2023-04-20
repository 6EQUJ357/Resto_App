import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"
import Restaurantnavigator from "./restaurantnavigator"

const RestaurantHome = () => {
  
    
  return (
    <div>
        <div style={{position:"relative"}}>
            <img className='immaa' src={"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"} alt='no img...' width="100%" height="600vh"/>
       
            <Restaurantnavigator />
            
            <div style={{position:"absolute", left:"13%", top:"180px",fontWeight:"bolder"}}>
              <h1 style={{textTransform:"capitalize", fontFamily:"cursive", textShadow:"5px 5px 1px black"}}>enjoy your health delicious food</h1>
              <p style={{width:"45%",color:"whitesmoke", fontFamily:"revert-layer", color:"lime", textShadow:"2px 2px 1px black"}}>sed autem laudantium dolores. voluptatem itaque ea consequatur eveniet. eum quas beatae cumque eum quaerat.</p>

               <Link to="/menu" className='btn btn-info' style={{borderRadius:"30px",marginLeft:"30px", boxShadow:"2px 2px 1px black"}}>Menu</Link>
               <Link to ="bookTable" className='btn btn-danger' style={{borderRadius:"30px",marginLeft:"30px", boxShadow:"2px 2px 1px black"}}> Book a Table</Link>
            </div>
        </div> 
    </div>
  )
}


export default RestaurantHome