import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form, Field } from "react-final-form";
import signinimage from './ProjectImg/signinimage.jpg'

import {
  Paper,
} from "@material-ui/core";



function SignIn() {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };


  

  return (
    <div >
      
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 25}}>

                 <div className='container'>
                   <div className='row'>
                      <div className='col-md-6'>

                      


              <div className='d-flex justify-content-center align-items-center'>
                    <div className="login-wrap ">
                        <div className="login-html text-center">
                          
                                <h5 className="text-center" style={{fontFamily: "Arial, Helvetica, sans-serif",color:"#5390D9",
                                 textShadow: "1px 1px #5390D9"}}><b> Automate Your Physio Clinical Practice</b></h5>

                         
                            <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                            <label for="tab-1"
                                className="tab " >  </label>
                           

                           
                            <div className="login-form text-start">

                               


                                <div className="sign-in-htm">
                                    <div className="group">

                                       <Field name="Email">
                      {({ input }) => (
                        <div className="mb-3">
                          <label for="user" className="label">Email ID</label>
                          <input id="user" type="email" className="input" {...input}  required/>
                          
                        </div>
                      )}
                    </Field>
                   </div>

                 <div className="group">
                        <Field name="Password">
                      {({ input }) => (
                        <div>
                          <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" {...input} className="input" data-type="password"  required/>
                         
                        </div>
                      )}
                    </Field>
                  </div>


                                    <div className="group">



                                      <Field name="checkbox">
                      {({ input }) => (
                        <div>
                          
                            <input id="check" type="checkbox" {...input} className="check" />
                           <label for="check"><span className="icon"></span> Show Password</label>
                        </div>
                      )}
                    </Field>
                
                   </div>
                                    <div className="group">
                                        <input type="submit" className="button" value="LogIn"/>
                                    </div>
                                    <div className="hr"></div>
                                    <div className="foot-lnk">
                                        <a href="#forgot">Forgot Password?</a>
                                         <br/><br/>
                                        <div className="social-links1  text-center">
                                        <a href="e" className="google-plus" style={{backgroundColor: "#db4a39"}}><i className="bx bxl-google-plus"></i></a>


                                           
                                            <a href="e" className="facebook" style={{backgroundColor: "#4267B2"}}><i className="bx bxl-facebook"></i></a>
                                            <a href="f" className="instagram InstaColor"><i className="bx bxl-instagram"></i></a>
                                           
                                          
                                        </div>

                                    <div className="row text-center mt-3">
                                        <p style={{color: "black"}}>Don't have an account? <a href="signUp.html">Register Here</a></p>
                                    </div>

                                    </div>
                                </div>


                              
                            </div>
                        </div>
                    </div>


                        </div> 

                       </div>
                       <div className=' col-md-6 text-center mt-5'>
                       
                        <img src={signinimage} className="img-fluid " alt=""
                            data-aos="zoom-in-up" />
                    
                       </div>


                   </div>
                 </div> 

            </Paper>
          </form>
        )}
      </Form>
    </div>
  );
}
export default SignIn;