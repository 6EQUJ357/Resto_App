import React from 'react'
import { useSelector } from 'react-redux'
import{Link} from "react-router-dom"


const RestaurantCart = () => {
  
  const displayCart = useSelector((state)=> state.RestaurantReducer1.cartValues);
  const cartPrise = useSelector((state)=> state.RestaurantReducer1.cartPrize)
  return (
    <div style={{backgroundColor:"powderblue", height:"auto"}}>
      {
        displayCart.length <= 0 ? 
        <div style={{  width:"60%", padding:"10px", margin:" auto", textAlign:"center"}}>
          <h1 style={{color:"red"}}>orders not yet placed...</h1>       
          <Link to="/menu" className='btn btn-primary'>goto menu</Link>
        </div> 
        :
        <div>

          <div style={{padding:"10px", textAlign:"center", backgroundColor:"olive"}}>
            <span className='btn btn-info'>Cart</span>
            <span className='btn btn-info' style={{margin:"0px 450px"}}>total items : {displayCart.length}</span> 
            <span className='btn btn-danger'>total price : {cartPrise}</span>
          </div>

          {displayCart.map(items => 
            <div className="card" style={{width: "18rem", display:"inline-block",margin:"10px", boxShadow:"2px 2px 5px black", fontWeight:"bolder"}} key={items.productId}>

              <img src={items.productImg} className="card-img-top" alt="not displayed..."  style={{height:"200px"}}/>

              <div className="card-body">
                <h5 className="card-title" style={{textAlign:"center", color:"lime"}}>{items.productName}</h5>

                <p className="card-text" style={{ textAlign: "center"}}>Price <span style={{color:"red", fontWeight:"bolder"}}>{items.productPrice}</span>/-</p>
              
              </div>
            </div>
          )}
        </div>
        
        
      }
    </div>
  )
}

export default RestaurantCart