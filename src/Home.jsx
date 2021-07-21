import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs1 from './ProjectImg/AboutUs1.jpg'
import AboutUs2 from './ProjectImg/AboutUs2.jpg'
import IconTelephysioportal from './ProjectImg/IconTelephysioportal.png'
import IconClinic from './ProjectImg/IconClinic.svg'
import IconDocumentation from './ProjectImg/IconDocumentation.png'
import IconFinancial from './ProjectImg/IconFinancial.png'
import IconAccessible from './ProjectImg/IconAccessible.png'
import Security1 from './ProjectImg/Security1.jpg'
import AppointmentManagement from './ProjectImg/AppointmentManagement.jpg'
import videoconsultation from './ProjectImg/videoconsultation.jpg'
import ClinicManagement1 from './ProjectImg/ClinicManagement1.jpg'
import ClinicResource from './ProjectImg/ClinicResource.jpeg'
import AccountsManagement22 from './ProjectImg/AccountsManagement22.jpg'
import TreatmentProtocol from './ProjectImg/TreatmentProtocol.jpg'
import EHRManagement from './ProjectImg/EHRManagement.jpg'
import Analytics from './ProjectImg/Analytics.jpg'
import Accessanywhere1 from './ProjectImg/Accessanywhere1.jpg'
import highestsecurity1 from './ProjectImg/highestsecurity1.png'
import EasytoUse1 from './ProjectImg/EasytoUse1.png'
import Icon4 from './ProjectImg/Icon4.jpg'
import Icon5 from './ProjectImg/Icon5.png'
import Youtube from './ProjectImg/Youtube.jpg'
import RefundPolicy from './ProjectImg/RefundPolicy.png'
import DigitalMarketting1 from './ProjectImg/DigitalMarketting1.jpg'
import webdev from './ProjectImg/webdev.png'
import seo from './ProjectImg/seo.png'
import PracticeGrow from './ProjectImg/PracticeGrow.jpg'
import ProfessionalContentWriting from './ProjectImg/ProfessionalContentWriting.png'
import socialMedia from './ProjectImg/socialMedia.png'
import Mobileappdevelopment from './ProjectImg/Mobileappdevelopment.jpg'
import LeadGeneration from './ProjectImg/LeadGeneration.jpg'
import emailmarketing from './ProjectImg/emailmarketing.jpg'




function Home() {

  return (
    <>

     
    <section id="hero">
        <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

            <div className="carousel-inner" role="listbox">

                
                <div className="carousel-item active">
                    
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/46AyvIKUtBA?start=8" title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
                
                
                

                </div>

               

            </div>

           

        </div>
    </section>








<section id="about" className="about">
    <div className="container" data-aos="fade-up">

        <div className="section-title">
            <h2>About Us</h2>
            
        </div>

        <div className="row mb-5">
            <div className="col-lg-6 order-lg-0" data-aos="flip-left">
                <img src={AboutUs1} className="img-fluid" alt="" style={{height: "100%"}}/>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left">
                <h3>Goals</h3>
                
                <ul>
                    <li><i className="bi bi-check-circle" style={{color: "red"}}></i> To encourage physiotherapists with technological automation in delivering highly standardized and efficient therapy to
                    their patients.</li>
                    <li><i className="bi bi-check-circle" style={{color: "red"}}></i> To digitize and automate physiotherapists with the most recent advancements in healthcare delivery in physiotherapy
                    practice.
                    </li>
                    
                </ul>

                <h3>Vision</h3>
                
                <ul>
                    <li><i className="bi bi-check-circle" style={{color: "red"}}></i> To become physio’s most liked, most trusted and most advanced SAAS Health IT service provider</li>
                   
                    <li><i className="bi bi-check-circle" style={{color: "red"}}></i> To ensure the highest standards of data security regulations and guidelines.</li>
                </ul>
               
            </div>
        </div>





        <div className="row">
          
           

<div className="col-lg-6 order-lg-1" data-aos="flip-right">
    <img src={AboutUs2}className="img-fluid" alt="" style={{height: "100%", width: "100%"}} />
</div>



<div className="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right">
    <h3>Mission</h3>

    <ul>
        <li><i className="bi bi-check-circle"style={{color: "red"}} ></i> To provide Physio’s with highly secured intuitive and futurist tech based automated clinic management services.
</li>
       
        <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Meet the changing needs of our clients.</li>
    </ul>

    <h3>Core Values</h3>

    <ul>
        <li><i className="bi bi-check-circle" style={{color: "red", fontWeight: "bolder"}}></i> Focus on new and innovative Health Technologies.</li>
        <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Practice high ethical standards.
        </li>
        <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Respect and protect the client’s privacy and promise to their patients.
</li>
    </ul>

</div>


        </div>

    </div>
</section>







<section id="featured-services" className="featured-services">
    <div className="container" data-aos="fade-up">

        <div className="section-title">
            <h2>Features</h2>
            <p> <b> <em>Physiomatica improves patients' experience and clinical outcomes.</em> </b></p>
        </div>

        <div className="row">
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon text-center" ><i> <img src={IconTelephysioportal} alt="" width="50px" height="50px"/></i></div>
                    
                   <h4 className="text-center"> <p style={{color: "#1a1aff"}}>Tele Physio Portal</p></h4>

                <h4 className="title text-center"> INTUITIVE</h4>
                    <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> Fear no cross infection at your waiting rooms or to yourself
                    </p> 
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Medical & social distancing with care
                    </p>
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Doesn`t require any IT skills
                    </p>
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Anywhere, anytime system access from any Internet-enabled device
                    </p>
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Free, unlimited customer service and support
                    </p>
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Upgradable, scalable at a pocket - friendly subscription cost
                    </p>
                    

                </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon text-center"><img src={IconClinic} alt="" width="50px" height="50px"/></div>
                    
                <h4 className="text-center">
                    <p style={{color: "#1a1aff"}}>Clinic Process</p>
                </h4>
                
                <h4 className="title text-center"> AUTOMATED</h4>

                    <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> Automate your clinical procedures while you do what you like the most - caring the patients

                    </p>
                    
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Streamlined documentation with carry-forward functionality, easy note-type switching
                    </p>
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Cut errors and save time with digital patient intake.
                    </p>
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Patient information automatically and securely flows into the EMR
                    </p>
                </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon text-center"><img src={IconDocumentation} alt="" width="50px" height="50px"/></div>
                    <h4>
                        <p style={{color: "#1a1aff", textAlign: "center"}}>Documentation</p>
                    </h4>
                    <h4 className="title text-center">THERAPY </h4>
                    
                <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Renders all the possible assessments & encourages the evidence based practice

                </p>
                
                <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Start to end documentation every aspect of various therapies

                
                </p>
                
                <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Document faster—and at the point of care—with a user-friendly layout that follows the therapist workflow.
                </p>
               
                </div>
            </div>
           </div>

           <div className="row mt-lg-5">
            <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                    <div className="icon text-center"><img src={IconFinancial}alt="" width="50px" height="50px"/></div>
                    <h4>
                        <p style={{color: "#1a1aff", textAlign: "center"}}>Financials & Accounting</p>
                    </h4>
                    <h4 className="title text-center">INTEGRATED</h4>
                    
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Multi-currency payment gateway for cross borders
                    </p>
                    
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Tele Physio integrated accounting system
                    </p>
                    <p className="description"><i className="bi bi-check-circle-fill"style={{color: "#1a1aff"}}></i> Income & expense day book updation in real time
                    </p>
                </div>
            </div>

        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon text-center"><img src={IconAccessible} alt="" width="50px" height="50px"/></div>
                <h4>
                    <p style={{color: "#1a1aff",textAlign: "center"}}>Accessible & Upgradable </p>
                </h4>
               
                <h4 className="title text-center">SCALABLE</h4>


                <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> Accessible anytime from any device from anywhere
                </p>
        
                <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> Upgradable at point of time

                </p>
                <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> Scalable from single user to multiple users & locations anywhere
                </p>
            </div>
        </div>

<div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0" data-aos="zoom-in">
    <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
        <div className="icon text-center"><img src={Security1} alt="" width="50px" height="50px"/></div>
        <h4>
            <p style={{color: "#1a1aff", textAlign: "center"}}>Data Security & Migration</p>
        </h4>

            <h4 className="title text-center">SEAMLESS</h4>
        <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> 100% Assured & guaranteed data security
        </p>

        <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> Ensures seamless data migration in quickest possible time


        </p>
        <p className="description"><i className="bi bi-check-circle-fill" style={{color: "#1a1aff"}}></i> Your data is exclusively your asset , stored and accessed only by you
        </p>
    </div>
</div>


        </div>

    </div>
</section>






<section  className="about">
    <div className="container" data-aos="fade-up">

        

        <div className="row  mb-lg-5">
            <div className="col-lg-6 order-lg-0" data-aos="fade-right">
                <img src={AppointmentManagement} data-aos="zoom-in" className="img-fluid" alt="" style={{ width: "100%", height: "100%"}}/> 
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-1" id="Appointment Management" data-aos="fade-left">
                <h3 data-aos="zoom-in">Appointment Management</h3>

                <ul data-aos="zoom-in">
                    <br/>
                    <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica replaces manual schedule books or practice scheduling software that is not integrated with your clinic’s
                    patients records and assessments.</li>
                    <br/>
                    <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica helps you to schedule appointments, documentation and patient records work together to coordinate your team
                    and fill up leakages.

                    </li>
                      <br/>

         <li><i className="bi bi-check-circle" style={{color: "red"}}></i> SMS Appointment Reminder of physiomatica helps users to send reminder messages to their patients on confirmation of the
                    scheduled appointments.
                    
                    </li>
                </ul>

               

            </div>
        </div>

 <br/>



        <div className="row mb-lg-5">



            <div className="col-lg-6 order-lg-1" data-aos="fade-left">
                <img src={videoconsultation} data-aos="zoom-in" className="img-fluid" alt="" style={{ width: "100%", height: "100%"}}/>
            </div>



            <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Video Consultation">
                <h3 data-aos="zoom-in">Video Consultation</h3>
                 <br/>
                <ul data-aos="zoom-in">
                    <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Video Consultation Made Easy

                    </li>
                    <br/>
                    <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica has a seamless integrated video consultation feature for face-face online consultation with your patients</li>
                    <br/>
                    <li><i className="bi bi-check-circle"style={{color: "red"}}></i> It's super easy to conduct an online video consultation and you can very easily guide & supervise your patient doing the
                    prescribed exercises</li>



                </ul>

               

            </div>


        </div>

    </div>

<br/>
<div className="container mt-lg-3" data-aos="fade-up">



    <div className="row mb-lg-5">
        
        <div className="col-lg-6 order-lg-0" data-aos="fade-right">
            <img src={ClinicManagement1} data-aos="zoom-in" className="img-fluid" alt="" style={{ width: "100%", height: "100%"}}/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left" id="Clinic Task Management">
            <h3 data-aos="zoom-in">Clinic Task Management</h3>
             <br/>
            <ul data-aos="zoom-in">
               
                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica gives you a list of daily tasks to accomplish in a grid view.</li>
                <br/>
                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> A set of separate tables are created & updated automatically for daily appointments booked, patients added, income
                generated and expense incurred.


                </li>

                <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica also analyses, collects and represents the data of total appointments, total patients, total income
                generated & total expense incurred in real time in a specified & selected date range picker i.e. clinic register

                
                </li>

            </ul>



        </div>
    </div>

<br/>



<div className="row mb-lg-5">



    <div className="col-lg-6 order-lg-1" data-aos="fade-left">
        <img src={ClinicResource} data-aos="zoom-in" className="img-fluid" alt=""
            style={{ width: "100%", height: "100%"}}/>
    </div>



    <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Clinic Resource Management">
        <h3 data-aos="zoom-in">Clinic Resource Management</h3>
        <br/>
        <ul data-aos="zoom-in">
            <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica manages your staff’s activity and productivity, their access to clinical records and business settings.
            </li>
            <br/>
            <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica manages multiple Clinics and grows your practice or Physio business by evaluating and investing your time
            and efforts on only what matters i.e. patient care</li>





        </ul>



    </div>


</div>

</div>


<br/>

<div className="container" data-aos="fade-up">



    <div className="row mb-lg-5">
        <div className="col-lg-6 order-lg-0" data-aos="fade-right">
            <img src={AccountsManagement22} data-aos="zoom-in" className="img-fluid" alt="" width="100%"
                height="100%"/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left" id="Accounts Management">
            <h3 data-aos="zoom-in">Accounts Management</h3>

            <ul data-aos="zoom-in">
                <br/>
                <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica generates online invoices, taxable bills and treatments protocols online.</li>
                
                <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica has an integrated payment gateway for digital payment transfers, tracks due dates and offers discounts
                also.

                </li>
                <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica also keeps track of your expenses in a day book while you are focused on your work.

                
                </li>

            </ul>



        </div>
    </div>


    <br/>







    <div className="row mb-lg-5">



        <div className="col-lg-6 order-lg-1" data-aos="fade-left">
            <img src={TreatmentProtocol} data-aos="zoom-in" className="img-fluid" alt=""
                style={{ width: "100%", height: "100%"}}/>
        </div>



        <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Treatment Protocols">
            <h3 data-aos="zoom-in">Treatment Protocols</h3>
            <br/>
            <ul data-aos="zoom-in">
                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica includes categorised programmed treatment protocols available for your patients as per their diagnosis.


                </li>
                 <br/>
                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica also includes the digital exercise program builder which allows physios to quickly search, build, save and
                assign the therapeutic exercise to their patients.

                </li>

                



            </ul>



        </div>


    </div>

</div>


<br/>

<div className="container" data-aos="fade-up">



    <div className="row mb-lg-5">
        <div className="col-lg-6 order-lg-0" data-aos="fade-right">
            <img src={EHRManagement} data-aos="zoom-in" className="img-fluid" alt="" width="100%" height="100%"/>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-1" data-aos="fade-left" id="EHR Management">
            <h3 data-aos="zoom-in">EHR Management</h3>

            <ul data-aos="zoom-in">
                <br/>
                <li><i className="bi bi-check-circle" style={{color: "red"}}></i> Physiomatica is automating your documentation as it reduces your efforts to type all the patient data and fill the long
                assessment forms with interactive forms and what not.</li>
                <br/>
                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> EHR management includes assessments, examinations, therapeutic exercises, Body charts, Trigger point charts, progress
                notes, additional notes, discharge summaries, case reports and custom treatment protocol development options.


                </li>

            </ul>



        </div>
    </div>


<br/>


    <div className="row ">



        <div className="col-lg-6 order-lg-1" data-aos="fade-left">
            <img src={Analytics} data-aos="zoom-in" className="img-fluid" alt=""
                style={{ width: "100%", height: "100%"}}/>
        </div>



        <div className="col-lg-6 pt-4 pt-lg-0 content order-lg-0" data-aos="fade-right" id="Analytics & Reports">
            <h3 data-aos="zoom-in">Analytics & Reports
</h3>
            <br/>
            <ul data-aos="zoom-in">
                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica helps you to automate your clinic`s business metrics

                </li>

                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> A real-time business intelligence to improve operational decision-making, so you can plan your financial or operational
                efforts accordingly.</li>

                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica tracks your businesses growth and analyses which marketing channels or referral sources are the most
                effective, which staff or treatment generates higher income and discovers your expenses leak</li>

                <li><i className="bi bi-check-circle"style={{color: "red"}}></i> All of this is automated into your clinical workflow, so you don’t have to do anything extra to generate various graphs
                & charts</li>

                    <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica also has an integrated data & analytics feature which helps you to generate various reports including
                    physio`s performance index, financial reports, clinic growth reports, reputation management reports.</li>

                        <li><i className="bi bi-check-circle"style={{color: "red"}}></i> Physiomatica `s endeavor has been to utilize all the advancements including IOT, AI and blockchain technology in a
                        phased manner.</li>

            </ul>
        </div>
    </div>
</div>
</section>







    
    <section id="benefits" className="services services">
      <div className="container bootstrap snippets bootdeys" data-aos="fade-up">

        <div className="section-title">
          <h2>BENEFITS</h2>
          
        </div>


    <div className="row ">
        <div className="col-lg-4 col-md-6 content-card" >
            <div className="card-big-shadow" >
                <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                    <div className="content blue">
                        <div className="icon2"><img src={Accessanywhere1} data-aos="zoom-in"
                                className="img-fluid" alt="" style={{ width: "100%", height: "100%"}}/></div>

                        <h5 className="title2">Access Anytime From Anywhere</h5>
                        <p className="description readP">
                            
                            <i className="bi bi-check-circle"
                                style={{color: "rgb(149, 13, 240)"}}></i> With Physiomatica,
                            you can access and use your account wherever you have an internet connection.
                            <br/> <br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> Great for updating your
                            client notes and
                            keeping up-to-date when you’re away from your clinic

                        </p>
                        <a href="javascript:void();" className="read-more readmore-btn"><span>Read More</span> <i
                                className="bi bi-arrow-right"></i></a>
                    </div>
                </div> 
            </div>
        </div>

        <div className="col-lg-4 col-md-6 content-card">
            <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                    <div className="content blue">
                        <div className="icon2"><img src={highestsecurity1} data-aos="zoom-in"
                                className="img-fluid" alt="" style={{ width: "100%", height: "100%"}}/></div>
                        <h5 className="title2">Highest Security</h5>
                        <p className="description readP"><i className="bi bi-check-circle"
                                style={{color:  "rgb(149, 13, 240)"}}></i> Physiomatica ensures
                            data security which is a top priority

                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> Physiomatica uses the
                            best security technology
                            possible.
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> Physiomatica validates
                            your data storage,
                            backup, or protection.
                        </p>
                        <a href="javascript:void();" className="read-more readmore-btn"><span>Read More</span> <i
                                className="bi bi-arrow-right"></i></a>
                    </div>
                </div> 
            </div>
        </div>

        <div className="col-lg-4 col-md-6 content-card">
            <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                    <div className="content blue">
                        <div className="icon2"><img src={EasytoUse1} data-aos="zoom-in" className="img-fluid"
                                alt="" style={{ width: "100%", height: "100%"}}/></div>
                        <h5 className="title2">Easiest To Use</h5>
                        <p className="description readP" > <i className="bi bi-check-circle"
                                style={{color: "rgb(149, 13, 240)"}}></i> Best UI & UX - user
                            friendly
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> Physiomatica is
                            intuitive and simple to use so
                            no need for any IT skills.
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> With a minimalistic set
                            up , you can get
                            onboard straight away.
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> For advanced top end
                            features, implementation &
                            deployment is done by our IT team remotely.
                        </p>
                        <a href="javascript:void();" className="read-more readmore-btn"><span>Read More</span> <i
                                className="bi bi-arrow-right"></i></a>
                    </div>
                </div> 
            </div>
        </div>

        <div className="col-lg-4 col-md-6 content-card">
            <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                    <div className="content blue">
                        <div className="icon2"><img src={Icon4} data-aos="zoom-in" className="img-fluid" alt=""
                                style={{ width: "100%", height: "100%"}}/></div>
                        <h5 className="title2">Prompt Customer Service & Support</h5>
                        <p className="description readP"><i className="bi bi-check-circle"
                                style={{color:  "rgb(149, 13, 240)"}}></i> We are available to
                            support you at your suitable days & time online / offline
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> Physiomatica is cloud
                            based SAAS which means no
                            clunky software to install.
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color:  "rgb(149, 13, 240)"}}></i> We have a dedicated a
                            customer support phone
                            line as well as email
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color:  "rgb(149, 13, 240)"}}></i> We feel duty bound to
                            troubleshoot any issues
                            in the minimum possible time.
                        </p>
                        <a href="javascript:void();" className="read-more readmore-btn"><span>Read More</span> <i
                                className="bi bi-arrow-right"></i></a>
                    </div>
                </div> 
            </div>
        </div>

        <div className="col-lg-4 col-md-6 content-card">
            <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                    <div className="content blue">
                        <div className="icon2"><img src={Icon5} data-aos="zoom-in" className="img-fluid" alt=""
                                style={{ width: "50%", height: "50%"}}/></div>
                        <h5 className="title2">No Lengthy Lock-In Contracts</h5>
                        <p className="description readP"><i className="bi bi-check-circle"
                                style={{color:  "rgb(149, 13, 240)"}}></i> You just need to pay
                            initially for six months after a free trial period which may be extended as per the
                            prevailing
                            policy.
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color:  "rgb(149, 13, 240)"}}></i> We don’t believe in
                            annual lock-in contracts,
                            so you are free to upgrade, downgrade or cancel at any time after six
                            months.

                        </p>
                        <a href="javascript:void();" className="read-more readmore-btn"><span>Read More</span> <i
                                className="bi bi-arrow-right"></i></a>
                    </div>
                </div> 
            </div>
        </div>

        <div className="col-lg-4 col-md-6 content-card">
            <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                    <div className="content blue">
                        <div className="icon2"><img src={RefundPolicy} data-aos="zoom-in" className="img-fluid"
                                alt="" style={{ width: "100%", height: "100%"}}/></div>
                        <h5 className="title2">Refund Policy</h5>
                        <p className="description readP"> <i className="bi bi-check-circle"
                                style={{color:  "rgb(149, 13, 240)"}}></i> We have a very
                            transparent refund policy without a single question asked.
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> In order to return,
                            raise a request within the
                            30 calendar days of your purchase.
                            <br/><br/>
                            <i className="bi bi-check-circle" style={{color: "rgb(149, 13, 240)"}}></i> Upon cancellation, the
                            refund is materialed
                            within seven working days.
                        </p>
                        <a href="javascript:void();" className="read-more readmore-btn"><span>Read More</span> <i
                                className="bi bi-arrow-right"></i></a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</div>
    </section>
    
    













<section id="plans" className="pricing">
    <div className="container" data-aos="fade-up">

        <div className="section-title">
            <h2>Pricing</h2>
            
        </div>

        <div className="row">

            <div className="col-lg-4 col-md-6">
                <div className="box featured" data-aos="fade-up" data-aos-delay="100">
                    <h3 >Free Plan</h3>
                    
                    <ul>
                        <li>Clinic Register</li>
                        <li>Appointment Booking</li>
                        <li>Clinic Manager</li>
                        <li>Referral Manager</li>
                        <li>Account Manager</li>
                        <li>Notifications</li>
                        <li>T & C apply</li>
                        
                    </ul>
                    <div className="btn-wrap">
                        <a href="a" className="btn-buy">REGISTER / SIGN UP</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="box featured" data-aos="fade-up" data-aos-delay="200">
                    <h3>Premium Pro</h3>

                    <ul>
                        <li>All Free Features</li>
                        <li>Video Consultation</li>
                        <li>Accounts Manager</li>
                        <li>Treatment protocols</li>
                        <li>Exercise Builder</li>
                        <li>EHR Manager</li>
                        <li>Enhanced Security</li>
                        
                    </ul>
                    <div className="btn-wrap">
                        <a href="a" className="btn-buy">SEND YOUR REQUEST</a>
                    </div>
                </div>
            </div>

          

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="box featured" data-aos="fade-up" data-aos-delay="400">
                   
                    <h3>Premium Pro+</h3>
                   
                    <ul>
                        <li>All Premium Pro Features</li>
                        <li>Analytics & Reports</li>
                        <li>Get Your Clinic’s Mobile App</li>
                        <li>Complete Customization</li>
                        <li>Exclusive Hosting Server</li>
                        <li>In Campus Login security</li>
                        <li>Third Party Integration</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="a" className="btn-buy">CONTACT US FOR QUOTE</a>
                    </div>
                </div>
            </div>

        </div>

    </div>
</section>















<section id="Digital" className="courses">
    <div className="container" data-aos="fade-up">


    
    <div className="row feature-icons" data-aos="fade-up">
        <div className="row ">
    
            <div className="col-xl-12 text-center" data-aos="zoom-in-up" data-aos-delay="100">
                <img src={DigitalMarketting1} className="img-fluid p-4" alt="" data-aos="zoom-in-up" />
            </div>




           


    
            <div className="section-title">
                <h2>Digital Marketing</h2>
            
            </div>



            <div className="col-lg-12 pt-4 pt-lg-0 content order-lg-0 " data-aos="zoom-in-up">
               
            <p className="text-center">

        Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using
            the internet and other forms of digital communication.
             This includes not only email, social media, and web-based advertising, but also text and multimedia messages as a
            marketing channel.
            <br/><br/>

            </p>
            
            <h5  ><b>Digital marketing can be broadly broken into the following main categories.</b></h5>

                    
                <p data-aos="zoom-in" style={{listStyle:"none"}} >
                   

                    <i className="bi bi-check-circle" style={{color: "red"}}></i>
                    Search Engine Optimization
                    <br/>
            
                    <i className="bi bi-check-circle" style={{color: "red"}}></i> Pay-per-Click 
                    <br/>
            
                    <i className="bi bi-check-circle" style={{color: "red"}}></i> Social Media Marketing <br/>
            
                    <i className="bi bi-check-circle" style={{color: "red"}}></i> Content Marketing <br/>
            
                    <i className="bi bi-check-circle" style={{color: "red"}}></i> Email Marketing <br/>
            
                <i className="bi bi-check-circle" style={{color: "red"}}></i> Mobile Marketing <br/>
                
                <i className="bi bi-check-circle" style={{color: "red"}}></i> Marketing Analytics. <br/>
            
                </p>
            
            <p className="text-center"> Digital marketing has become prominent largely because it reaches such a wide audience of people, but it offers a number
            of other advantages as well.</p>
            
            </div>
   

            <div className="col-xl-12 d-flex content mt-3">
                <div className="row align-self-center ">
    

                    <div >
                    <h3 > Benefits</h3>
                    
                    </div>

                    <div className="col-md-12 icon-box" data-aos="fade-up">
                        

                        

                        <div>
                            <p> <i className="bi bi-check-circle " style={{color: "red"}}></i> A broad geographic reach <br/>
                            <i className="bi bi-check-circle" style={{color: "red"}}></i> Cost efficiency <br/>

                        <i className="bi bi-check-circle" style={{color: "red"}}></i> Quantifiable results <br/>
                            <i className="bi bi-check-circle" style={{color: "red"}}></i> Easier personalization <br/>
                            <i className="bi bi-check-circle" style={{color: "red"}}></i> More connection with customers <br/>
                            <i className="bi bi-check-circle" style={{color: "red"}}></i> Easy and convenient conversions
                             <br/>
                            
                        
                        </p> 
                            
                            <p className='text-center'>Digital marketing should be one of the primary focuses of almost any physio's overall marketing strategy.
                            
                            Never before has there been a way to stay in such consistent contact with your customers, and nothing else offers
                            the
                            level of personalization that digital data can provide. The more you embrace the possibilities of digital marketing,
                            the
                            more you'll be able to realize your company's growth potential.</p>
                               
                            

                        </div>
                    </div>

                 


                </div>
            </div>
    
        </div>
    
    </div>


<br/><br/>


       

        

        <div className="row " data-aos="zoom-in" data-aos-delay="100">

                <div className="section-title">
                    <h2>Physiomatica is Exclusively Physio Centric</h2>
                
                </div>


               <h6 className="text-center mb-4"><em> “ We are the only Health IT company in India serving exclusively the Physios community offering a cloud based Tele
            Physio web App & Digital Marketing services for their all-round inclusive growth ”</em></h6>


           <div className="text-center mb-3" style={{color: "black"}}><h3><b>SCOPE OF WORK</b> </h3></div> 
            
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" style={{height: "450px"}}>
                
                <div className="course-item">
                    <img src={webdev} className="img-fluid" alt="..."style={{height: "50%", width: "100%"}}/>
                    <div className="course-content" style={{height: "150px", overflow: "hidden"}}>
                        

                        <h3><a href="course/website.html" target="_blank">Website Design & Development</a></h3>
                        <p>We are aware of the public demands and can ensure you a smart functioning website full of features and customizations.
                        With our profuse experience and expertise to render an effective, ultra-modern website, we ensure that you get the best
                        website designed for you as per your specific facilities.</p>
                   
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/website.html" role="button" target="_blank">Read More</a></div>
                   
                    
                </div>
            </div> 

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{height: "450px"}}>
                <div className="course-item">
                    <img src={Mobileappdevelopment} className="img-fluid" alt="..." style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                      

                        <h3><a href="course/Mobile.html" target="_blank">Mobile App Development</a></h3>
                        <p>Today Mobile applications have become a necessity in your business and to interact better with your customers,you need
                        to have a customized app according to your business needs.
                        
                        An estimated 60% Consumers prefer mobile apps over websites. Needless to say, if you are a consumer-centred business,

</p>
                        
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/Mobile.html" role="button" target="_blank">Read More</a></div>
                    
                </div>
            </div> 

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{height: "450px"}}>
                <div className="course-item">
                    <img src={seo} className="img-fluid" alt="..." style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                        

                        <h3><a href="course/Search Engine.html"target="_blank">Search Engine Optimization (SEO)</a></h3>
                        <p>Google it” is a simple two word phrase that may be the most used phrase in the world. When someone follows this command
                        a chain of events is set in motion in the virtual space. The chain of events that is set in motion to throw up search
                        results is at the heart of search engine optimization (SEO).
                         </p>
                        
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/Search Engine.html" role="button" target="_blank">Read More</a></div>
                </div>
            </div> 
            

        </div>

<br/>

        <div className="row " data-aos="zoom-in" data-aos-delay="100">
        
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch "style={{height: "450px"}}>
                <div className="course-item">
                    <img src={LeadGeneration} className="img-fluid" alt="..." style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                       
        
                        <h3><a href="course/Lead Generation.html"target="_blank">Lead Generation</a></h3>
                        <p>Lead generation is one aspect which can do wonders for every business owner. For any business, it is important to
                        utilize the time and money in a best possible manner as if they start on doing the market research on their own then
                        they have to spend a lot of time and efforts and through the means of our company they would be getting a platform to
                        market their products & services in a better manner.
                       </p>
                           
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/Lead Generation.html" role="button"target="_blank">Read More</a></div>
                </div>
            </div> 
        
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" style={{height: "450px"}}>
                <div className="course-item">
                    <img src={socialMedia} className="img-fluid" alt="..."
                        style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                        
        
                        <h3><a href="course/Social.html"target="_blank">Social Media Marketing (SMM)</a></h3>
                        <p>In the two and half decades of its existence, the Internet has evolved into a ubiquitous medium that has impacted the
                        world in no uncertain measure. It has spawned a variety of businesses all based on Internet technologies. Social media
                        is one among the greatest gifts of the Internet boom. Social media has become the defining moment of the early part of
                        the twenty first century.
 </p>
                        
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/Social.html" role="button"target="_blank">Read More</a></div>
                </div>
            </div> 
        
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"style={{height: "450px"}}>
                <div className="course-item">
                    <img src={ProfessionalContentWriting} className="img-fluid" alt="..." style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                        
        
                        <h3><a href="course/Content writing.html"target="_blank">Professional Content writing & Blogging</a></h3>
                        <p>Digismart Physiomatica is a premier healthcare content writing firm that specializes in web content generation for the
                        websites of physio fraternity including practitioners, hospitals and educational institutions. We engage in dedicated
                        and professional healthcare content writing with the aim of enhancing the authenticities of your brand</p>
                            
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/Content writing.html" role="button"target="_blank">Read More</a></div>
                </div>
            </div> 
        
        </div>
         
        <br/>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
        
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"style={{height: "450px"}}>
                <div className="course-item">
                    <img src={PracticeGrow} className="img-fluid" alt="..." style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                        
        
                        <h3><a href="course/Practice Growth.html"target="_blank">Physio Practice Growth & Reputation Management</a></h3>
                        <p>Reputation management has always been vital for healthcare professionals. Bedside manner, patient word of mouth, and
                        reputation among your colleagues all factor into your medical practice’s growth. Building the career, business, and
                        practice you want has always meant building and maintaining a positive reputation. </p>
                        
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/Practice Growth.html" role="button"target="_blank">Read More</a></div>
                </div>
            </div> 
        
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{height: "450px"}}>
                <div className="course-item">
                    <img src={emailmarketing} className="img-fluid" alt="..."
                        style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                        
        
                        <h3><a href="course/Email Marketing.html"target="_blank">Email Marketing</a></h3>
                        <p>E-mail marketing is one of the most important tools available to clinics to increase their footfalls and thereby gain
                        opportunities to garner more customers to your service. E-mail is akin to the erstwhile direct mailers that you used to
                        send to prospects on a mailing list maintained by you. With the advent of the Internet and its associated technologies
                        direct mailing has given way to E-mail marketing.</p>
                        
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/Email Marketing.html" role="button"target="_blank">Read More</a></div>
                </div>
            </div> 
        
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" style={{height: "450px"}}>
                <div className="course-item">
                    <img src={Youtube} className="img-fluid" alt="..." style={{height: "50%", width: "100%"}}/>
                    <div className="course-content"style={{height: "150px", overflow: "hidden"}}>
                       
        
                        <h3><a href="course/YouTube.html"target="_blank">YouTube Videos & Monetization</a></h3>
                        <p>Videos are the best modes of your presence on social media platforms like YouTube. Digismart Physiomatica has a team of
                        experienced professionals for video making & editing, graphic designers for making thumbnails & other useful creatives.
                        We can also help you to monetize your YouTube channel in a professional way by meeting
</p>
                        
                    </div>
                    <div className="p-3 text-center"><a className="btn btn-primary" href="course/YouTube.html" role="button"target="_blank">Read More</a></div>
                </div>
            </div> 
        
        </div>

        

    </div>
</section>















<section id="testimonials" className="testimonials">
    <div className="container" data-aos="fade-up">

        <div className="section-title">
            <h2>What are Esteem Clients Say</h2>
            
        </div>

        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper-wrapper">

                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                            Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src={Youtube} className="testimonial-img" alt=""/>
                        <h3>Saul Goodman</h3>
                        <h4>Ceo &amp; Founder</h4>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum
                            eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim
                            culpa.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="Project img/2.jpg" className="testimonial-img" alt=""/>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
                            minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="Project img/4.jpg" className="testimonial-img" alt=""/>
                        <h3>Jena Karlis</h3>
                        <h4>Store Owner</h4>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim
                            velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum
                            veniam.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="Project img/5.jpg" className="testimonial-img" alt=""/>
                        <h3>Matt Brandon</h3>
                        <h4>Freelancer</h4>
                    </div>
                </div>

                <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam
                            enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore
                            nisi cillum quid.
                            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="Project img/6.jpg" className="testimonial-img" alt=""/>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                    </div>
                </div>

            </div>
            <div className="swiper-pagination"></div>
        </div>

    </div>
</section>






<section id="contact-form" className="contact">
    <div className="container">

        <div className="section-title">
            <h2>Contact</h2>
            
        </div>

    </div>

  

    <div className="container">

        <div className="row mt-5">

            <div className="col-lg-6">

                <div className="row">
                    <div className="col-md-12">
                        <div className="info-box">
                            <i className="bx bx-map"></i>
                            <h3>Our Address</h3>
                            <p>403 Ground Floor Bhagwan Moharir Marg, New Delhi India</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box mt-4">
                            <i className="bx bx-envelope"></i>
                            <h3>Email Us</h3>
                            <p>info@example.com<br/>contact@example.com</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="info-box mt-4">
                            <i className="bx bx-phone-call"></i>
                            <h3>Call Us</h3>
                            <p>+1 5589 55488 55<br/>+1 6678 254445 41</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-lg-6">
                <form  method="post" className="php-email-form">
                    <div className="row">
                        <div className="col form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                required/>
                        </div>
                        <div className="col form-group ">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                required/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"
                            required/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message"
                            required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center">
                    <a href="mailto:dinesharora156@gmail.com" className="appointment-btn scrollto" >
                            Send Message</a>
                    
                    
                    </div>
                </form>
            </div>

        </div>

    </div>
</section>







</>







    
  );
}

export default Home;