import React from 'react'

const GalaryReUseableComponent = ({categoty, galaryName}) => {
  return (
    <div>
        <h1 style={{ textAlign: "center"}}>{galaryName}</h1>

        {categoty.map(items => 
            <div className="card" style={{width: "18rem", display:"inline-block", margin:"10px", boxShadow:"2px 2px 5px black", fontWeight:"bolder"}} key={items.product_id}>

                <img src={items.product_img} class="card-img-top" alt="not display"  style={{height:"200px"}} />
                <div class="card-body">

                <h5 class="card-title" style={{textAlign:"center", color:"lime"}}>{items.product_name}</h5>

            </div>
            </div>
          )}
    </div>
  )
}

export default GalaryReUseableComponent