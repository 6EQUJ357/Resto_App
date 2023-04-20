import React from 'react'
import {Link} from "react-router-dom"
import {useFormik} from "formik"
import "../restaurant_style.css"
import * as Yup from "yup"


 const RestaurantCreateAccount = () => {

  const formik = useFormik({
    initialValues: {
      name : "",
      email :"",
      password : ""
    },
    onSubmit: (values) => {
      alert("your account has been created... \n please sign in...");

     
    },
    // validate:(values) => {
    //   let errors= {};
    //   if(!values.name) {
    //     errors.name = "Name Requied";
    //   }
    //   if(!values.password) {
    //     errors.password = "Password Requied";
    //   }
    //   if(!values.email) {
    //     errors.email = "Email Requied";
    //   }
    //   return errors;
    // }

    
    // yup validation

    validationSchema : Yup.object({
      name : Yup.string().required("name required"),
      email : Yup.string().email("invalid email").required("Email required"),
      password : Yup.string().required("password required")
    })
  })

  
  return (
    <div className='restaurant_create_account_container'>
      <div className='restaurant_create_account_box'>

        <div className='restaurant_create_account_box_left'>
          <div className='restaurant_create_account_box_left_content'>
            <h1>welcome back!</h1>
            <p>to keep connected with us please login with your personal info</p>
            <Link className='restaurant_create_account_box_left_content_link' to="/login">sign in</Link>
          </div>
        </div>

        <div className='restaurant_create_account_box_right'>
          <div className='restaurant_create_account_box_right_content'>

            <h1>create account</h1>

            <div className='font_container'>
              <i class="fa-brands fa-facebook-f fonttt"></i>

              <i class="fa-brands fa-google-plus-g fonttt"></i>

              <i class="fa-brands fa-linkedin-in fonttt"></i>

            </div>
            
            <p>or use your email for registration:</p>


            <form onSubmit = {formik.handleSubmit} autoComplete='off' >
              <input className='nnn' type="text" name="name" placeholder="Name" value={formik.values.name} onChange = {formik.handleChange} onBlur={formik.handleBlur}/>
              <br/>
              {formik.errors.name?<small style={{"marginLeft":"-150px","color":"red","fontWeight":"bold"}}>{formik.touched.name && formik.errors.name}</small>:null}

              <br/>
              <input className='eee' type="email" name="email" placeholder='Email' value={formik.values.email} onChange = {formik.handleChange} onBlur={formik.handleBlur} />
              <br/>
              {formik.errors.email?<small style={{"marginLeft":"-150px","color":"red","fontWeight":"bold"}}>{formik.touched.email && formik.errors.email}</small>:null}  
              <br/>

              <input className='ppp' type="password" name="password" placeholder='Password' value={formik.values.password} onChange = {formik.handleChange} onBlur={formik.handleBlur} />
              <br/>

              {formik.errors.password?<small style={{"marginLeft":"-120px","color":"red","fontWeight":"bold"}}>{formik.touched.password && formik.errors.password}</small>:null}
              <br/>
              
              <input  className='cch' type="checkbox" checked = "checked"/>
              <label className='cch_lable'>i agree all statements in <Link>terms of service</Link></label>
              <br/>
              
              <br/>
              <button className='btb' type='submit'> sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCreateAccount