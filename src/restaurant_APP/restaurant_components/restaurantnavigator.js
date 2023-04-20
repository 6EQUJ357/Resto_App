import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Restaurantnavigator = () => {
    // getting store values...

    const cartCount = useSelector((state)=> state.RestaurantReducer1.cartValues.length);

    let style = {color:"orange",fontWeight:"bolder", textTransform:"capitalize", textShadow:"3px 3px 5px red", fontSize:"1.3rem",marginLeft:"15px" }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light " >
                <div className="container-fluid " >
                    <div>
                        <Link to="/me" className="navbar-brand" style={{...style,fontSize:"3rem", color:"powderblue"}}  >
                            <img src="https://banner2.cleanpng.com/20180330/vsw/kisspng-cook-chef-clip-art-cook-5abe254b20fdc6.4702933115224108271351.jpg" alt="not displayed" width="50" height="70" className="d-inline-block align-text-top" />WR@NG
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                        <ul className="navbar-nav" >
                            <li className="nav-item">
                            <Link to="/" className="nav-link " aria-current="page" style={style} >Home</Link>
                            </li>

                            <li className="nav-item">
                            <NavLink to="/menu" className="nav-link"  style={style} >menu</NavLink>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link to="/galary" className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={style} >
                                    galary
                                </Link>
                                <ul className="dropdown-menu bg-info" aria-labelledby="navbarDropdownMenuLink">

                                    <li><Link to="/galary/biryani" className="dropdown-item" >Briyani</Link></li>

                                    <li><Link to="/galary/rice" className="dropdown-item" >Rice</Link></li>

                                    <li><Link to="/galary/fastFood" className="dropdown-item" >Fast Food</Link></li>

                                    <li><Link to="/galary/pizza" className="dropdown-item" >Pizza</Link></li>

                                    <li><Link to="/galary/burger" className="dropdown-item" >Burger</Link></li>

                                    <li><Link to="/galary/soup" className="dropdown-item" >Soups</Link></li>

                                    <li><Link to="/galary/iceCream" className="dropdown-item" >Ice Cream</Link></li>
                                    
                                    <li><Link to="/galary/beverages" className="dropdown-item">Beverages</Link></li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                            <Link to="/bookTable" className="nav-link"  style={style} >book_table</Link>
                            </li>

                            <li className="nav-item">
                            <Link to ="/contactUs" className="nav-link"  style={style} >contact</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/aboutUs" className="nav-link" style={style} >about</Link>
                            </li>

                            <li className="nav-item">
                            <Link to="/login" className="nav-link"  style={style} >login</Link>
                            </li>

                            <li className="nav-item">
                            <Link to ="/createAccount" className="nav-link"  style={style} >create Account</Link>
                            </li>

                            <li className="nav-item">
                            <Link to ="/cart" className="nav-link"  style={{...style,marginLeft:"30px"}} >
                                <div className='position-relative'>
                                    <i className="fa-solid fa-cart-shopping " style={{fontSize:"1.5rem"}}></i>
                                    <span className="position-absolute " style={{top:"-20px", left:"25px", color:"whitesmoke",textAlign:"center"}}>{cartCount}<span class="visually-hidden">unread messages</span>
                                    </span>
                                </div>
                             
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default Restaurantnavigator