import React, {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

          // style
import "../App.css"


// components
const RestaurantHome = lazy(()=> import("./restaurant_components/restaurantHome"))

const RestaurantMenu = lazy(()=> import("./restaurant_components/restaurantMenu"))
// import menu item lists
const MenuBiryani =lazy(()=> import("./restaurant_components/menu_components/menuBiryani"))
const MenuRice =lazy(()=> import("./restaurant_components/menu_components/menuRice"))
const MenuFastFood =lazy(()=> import("./restaurant_components/menu_components/menuFastFood"))
const MenuPizza =lazy(()=> import("./restaurant_components/menu_components/menuPizza"))
const MenuBurger =lazy(()=> import("./restaurant_components/menu_components/menuBurger"))
const MenuSoup =lazy(()=> import("./restaurant_components/menu_components/menuSoup"))
const MenuIceCream =lazy(()=> import("./restaurant_components/menu_components/menuIceCream"))
const MenuBeverages = lazy(()=> import("./restaurant_components/menu_components/menuBeverages"))

const RestaurantGalary = lazy(()=> import("./restaurant_components/restaurantGalary"))
// import Galary item lists
const GalaryBiryani =lazy(()=> import("./restaurant_components/galary_component/galaryBiryani"))
const GalaryRice =lazy(()=> import("./restaurant_components/galary_component/galaryRice"))
const GalaryFastFood =lazy(()=> import("./restaurant_components/galary_component/galaryFastFood"))
const GalaryPizza =lazy(()=> import("./restaurant_components/galary_component/GalaryPizza"))
const GalaryBurger =lazy(()=> import("./restaurant_components/galary_component/galaryBurger"))
const GalarySoup =lazy(()=> import("./restaurant_components/galary_component/galarySoups"))
const GalaryIceCream =lazy(()=> import("./restaurant_components/galary_component/galaryIceCream"))
const GalaryBeverages = lazy(()=> import("./restaurant_components/galary_component/galaryBeverages"))

const RestaurantContactUs = lazy(()=> import("./restaurant_components/restaurantContactUs"))
const RestaurantAboutUs = lazy(()=> import("./restaurant_components/restaurantAboutUs"))
const RestaurantTable = lazy(()=> import("./restaurant_components/restaurantTable"))
const RestaurantCart = lazy(()=> import("./restaurant_components/restaurantCart"))
const RestaurantLogIn = lazy(()=> import("./restaurant_components/restaurantLogIn"))
const RestaurantCreateAccount = lazy(()=> import("./restaurant_components/restaurantCreateAccount"))
const RestaurantError = lazy(()=> import("./restaurant_components/restaurantError"))

const RestaurantRoutings = () => {
  return (
    <div>
        <div >
            <BrowserRouter>
              <Suspense fallback = {<center><h1>loading.....</h1></center>}>
                <Routes>
                  <Route path='/' element = {<RestaurantHome />}/>                
                  <Route path='/menu' element = {<RestaurantMenu />}/>
                  
                  {/* menu items lists */}
                    <Route path='/menu/biryani' element = {<MenuBiryani />}/>
                    <Route path='/menu/rice' element = {<MenuRice />}/>
                    <Route path='/menu/fastFood' element = {<MenuFastFood />}/>
                    <Route path='/menu/pizza' element = {<MenuPizza />}/>
                    <Route path='/menu/burger' element = {<MenuBurger />}/>
                    <Route path='/menu/soup' element = {<MenuSoup />}/>
                    <Route path='/menu/iceCream' element = {<MenuIceCream />}/>
                    <Route path='/menu/beverages' element = {<MenuBeverages />}/>    

                  <Route path='/galary' element = {<RestaurantGalary />}/>

                  {/* galary items lists */}
                  <Route path='/galary/biryani' element = {<GalaryBiryani />}/>
                    <Route path='/galary/rice' element = {<GalaryRice />}/>
                    <Route path='/galary/fastFood' element = {<GalaryFastFood />}/>
                    <Route path='/galary/pizza' element = {<GalaryPizza />}/>
                    <Route path='/galary/burger' element = {<GalaryBurger />}/>
                    <Route path='/galary/soup' element = {<GalarySoup />}/>
                    <Route path='/galary/iceCream' element = {<GalaryIceCream />}/>
                    <Route path='/galary/beverages' element = {<GalaryBeverages />}/>  

                  <Route path='/contactUs' element = {<RestaurantContactUs />}/>
                  <Route path='/aboutUs' element = {<RestaurantAboutUs />}/>   
                  <Route path='/bookTable' element = {<RestaurantTable />}/>
                  <Route path='/cart' element = {< RestaurantCart/>}/>
                  <Route path='/login' element = {<RestaurantLogIn />}/>   
                  <Route path='/createAccount' element = {<RestaurantCreateAccount />}/>  
                  <Route path='*' element = {<RestaurantError />}/> 

                </Routes>
              </Suspense>

            </BrowserRouter>
        </div>
    </div>
  )
}

export default RestaurantRoutings