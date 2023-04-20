import React from 'react'
import jsonItems from "../../json/restaurant_items.json"

const RestaurantGalary = () => {


  return (
    <div>
      {jsonItems.Biryani.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

       {jsonItems.Rice.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

       {jsonItems.Fast_food.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

       {jsonItems.Pizza.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

       {jsonItems.Burger.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

       {jsonItems.soups.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

       {jsonItems.Ice_cream.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

       {jsonItems.Beverages.map(item=>
        <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px"}}>
         <img src={item.product_img} className="card-img-top" alt="not displayed..." style={{height:"200px"}}  />
       </div>)}

    </div>
  )
}

export default RestaurantGalary