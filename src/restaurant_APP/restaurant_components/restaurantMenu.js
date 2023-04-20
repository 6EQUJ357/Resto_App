import React from 'react'
import { Link } from 'react-router-dom'


const RestaurantMenu = () => {
    let style = {width: "18rem", display:"inline-block", margin:'20px 20px', boxShadow:"2px 2px 3px black", fontWeight:"bolder", borderRadius:"10px"}
  return (
    <div className='menucont'>
        <h1 style={{ textAlign: "center"}}>menu items...</h1>

        <center>
            <Link to="/menu/biryani">
                <div className="card" style={style} title='click to view...'>

                <img src="https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg" className="card-img-top" alt="not  displayed" height="200px" style={{borderRadius:"20px"}} />

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>Biryani</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Link> 

            <Link to="/menu/rice">
                <div className="card" style={style} title='click to view...'>

                <img src="https://www.flavourstreat.com/wp-content/uploads/2020/12/turmeric-lemon-rice-recipe-02.jpg" className="card-img-top" alt="not  displayed" height="200px"/>

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>Rice</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Link>

            <Link to="/menu/fastFood">
                <div className="card" style={style} title='click to view...'>

                <img src="https://i.ytimg.com/vi/rcbCY26CLX4/maxresdefault.jpg" className="card-img-top" alt="not  displayed" height="200px"/>

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>Fast Food</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Link>

            <Link to="/menu/pizza">
                <div className="card" style={style} title='click to view...'>

                <img src="https://images-gmi-pmc.edge-generalmills.com/e9cb9507-51e3-4d64-a175-0f2da78f84c5.jpg" className="card-img-top" alt="not  displayed" height="200px"/>

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>Pizza</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            </Link>

            <Link to="/menu/burger">
                <div className="card" style={style} title='click to view...'>

                <img src="http://ifcrestaurants.com/shop-admin/images/products/jMzs1SvNU8c9yOhCfI.png" className="card-img-top" alt="not  displayed" height="200px"/>

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>Burger</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Link>

            <Link to="/menu/soup">
                <div className="card" style={style} title='click to view...'>

                <img src="https://shirleycooking.com/wp-content/uploads/2020/11/vegetable-soup-web.jpg" className="card-img-top" alt="not  displayed" height="200px"/>

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>soups</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Link>

            <Link to="/menu/iceCream">
                <div className="card" style={style} title='click to view...'>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GRTVwTxqalIh8Hhaf-irvGwYs8YEu6sSOg&usqp=CAU" className="card-img-top" alt="not  displayed" height="200px"/>

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>Ice cream</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Link>

            <Link to="/menu/beverages">
                <div className="card" style={style} title='click to view...'>

                <img src="https://www.bigbasket.com/media/uploads/p/xxl/40182989_4-monster-ultra-energy-drink-zero-sugar.jpg" className="card-img-top" alt="not  displayed" height="200px"/>

                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:"center", color:"red"}}>Beverages</h5>
                    <p className="card-text" style={{color:"blue"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
            </Link>                
        </center>     

    </div>
  )
}

export default RestaurantMenu