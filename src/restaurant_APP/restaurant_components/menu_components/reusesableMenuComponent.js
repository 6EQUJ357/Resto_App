import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'



const ReusesableMenuConponent = ({categoty, menuName, INCREAMENTCART}) => {
  // getting store values...

  const cartCount = useSelector((state)=> state.RestaurantReducer1.cartValues.length);

  let tabnum = useSelector(state => state.RestaurantReducer1.tableNumber)
  

  const dispatch = useDispatch();

  const INCREAMENT = async(items)=> {

   await dispatch(INCREAMENTCART({productName:items.product_name, productPrice:items.product_price, productImg: items.product_img, productId : items.product_id}));

    alert("item added to cart...");
    
  
}

  // const DECREAMENT = async(items)=> {
  //   await dispatch(DECREAMENTCART({productName:items.product_name, productPrice:items.product_price, productImg: items.product_img, productId : items.product_id}));
  //    alert("item removed from cart...");
  //  }

  return (
    <div style={{position:"relative", backgroundColor:"olivedrab"}}>
        <h1 style={{ textAlign: "center"}}>{menuName}...</h1>

        <Link to ="/cart"  style={{ marginLeft:"40px"}} >
            
                <i className="fa-solid fa-cart-shopping " style={{position:"absolute", top:"30px", right:"30px", fontSize:"1.5rem",color:"lime"}}></i>
                <span className="position-absolute " style={{top:"13px", right:"15px", backgroundColor:"red", color:"white", width:"25px", height:"25px", borderRadius:"50%", textAlign:"center"}}>{cartCount}<span class="visually-hidden">unread messages</span>
                </span>
                              
        </Link>
        <br />

        {categoty.map(items => 
            <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px", boxShadow:"2px 2px 5px black", fontWeight:"bolder"}} key={items.product_id}>

                <img src={items.product_img} class="card-img-top" alt="not display"  style={{height:"200px"}} />
                <div class="card-body">

                <h5 class="card-title" style={{textAlign:"center", color:"lime"}}>{items.product_name}</h5>

                <p class="card-text" style={{ textAlign: "center"}}>price : <span style={{color:"red"}}>{items.product_price}</span>/-</p>

                &emsp;
                
                <button type='button' style={{boxShadow:"2px 2px 3px black", marginLeft:"60px"}} class="btn btn-info" title='add to cart' onClick={()=>INCREAMENT(items)}>Add item</button>
                 
                 
                &emsp;
                {/* <button type='button'style={{boxShadow:"2px 2px 3px black"}} class="btn btn-danger" title='remove from cart' onClick={()=>DECREAMENT(items)}>Remove item</button> */}

                </div>
            </div>
          )}
    </div>
  )
}

export default ReusesableMenuConponent