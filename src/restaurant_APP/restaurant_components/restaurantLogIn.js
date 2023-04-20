import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import "../restaurant_style.css"
import * as Yup from "yup"

 const RestaurantLogIn = () => {

  const formik = useFormik({
    initialValues:{
      name : "",
      password : ""
    },
    onSubmit:(values) => {
      alert("sing in successfully...");
      console.log(values);
    },
    // validate:(values)=> {
    //   let errors = {};
    //   if(!values.name) {
    //     errors.name = "Name Required";
    //   }
    //   if(!values.password){
    //     errors.password = "Password Required";
    //   }
    //   return errors;
    // }

          // yup validation
      validationSchema : Yup.object({
        name : Yup.string().required("name required"),
        password : Yup.string().required("password required")
      })
  })

  return (
    <div className='restaurant_signin_container'>
      <div className='restaurant_signin_container_box'>

        <div className='restaurant_signin_container_box_bottom'>
          <div className='box_bottom_text'>
            <h1>heed some pizza, yo?</h1>
            <p>c'mon and order now from the menu items...</p>
          </div>
          <div className='box_bottom_font'>
            <p>sign in with</p>
            <Link><i class="fa-brands fa-facebook-f"></i></Link>
            <Link><i class="fa-brands fa-twitter"></i></Link>
            <Link><i class="fa-brands fa-instagram"></i></Link>
          </div>
        </div>

        <div className='restaurant_signin_container_box_top'>
          <div className='top_text'>
            <h1>log in</h1>
            <form onSubmit={formik.handleSubmit} autoComplete='off'>
              <input className='top_inp' type= "text" name='name' placeholder='Name' value={formik.values.name} onChange = {formik.handleChange} onBlur={formik.handleBlur}/><br/>
              {formik.errors.name?<small style={{"color":"red", "marginLeft":"-150px", "fontWeight":"bolder"}}>{formik.touched.name && formik.errors.name}</small>:null}
              <br/>

              <input className='top_inp' type= "password" name='password' placeholder='Password' value={formik.values.password} onChange = {formik.handleChange} onBlur={formik.handleBlur}/><br/>
              {formik.errors.password?<small style={{"color":"red", "marginLeft":"-150px","fontWeight":"bolder"}}>{formik.touched.password && formik.errors.password}</small>:null}
              <br/>

              <input className='top_but' type="submit" value="submit"/>

              <p className='top_para'>forgot password?</p>

              <Link to="/createAccount" style={{"textDecoration":"none", "color":"aqua"}}><p className='top_bot_para'>create your account<i class="fa-solid fa-arrow-right-long top_bot_font"></i></p></Link>
            </form>
          </div>
        </div>

      </div>

    </div>
  )
}

export default RestaurantLogIn
