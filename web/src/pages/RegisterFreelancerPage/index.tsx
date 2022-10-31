import React from "react";
import LoginSpace from "../../components/Login";
import SpaceBackground from "../../components/SpaceBackground/index";
//import RegisterFreelancer from "../RegisterFreelancer";
import RegisterFreelancer from "../RegisterFreelancer";

const RegisterFreelancerPage = () =>{

    return(
   
        <>
        <main id="LoginPage">

        <SpaceBackground component={<RegisterFreelancer/>}/>   

        </main>
         
        </>
  
    );
}

export default RegisterFreelancerPage;