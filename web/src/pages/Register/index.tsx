import React from "react";
import RegisterSpace from "../../components/Register";
import SpaceBackground from "../../components/SpaceBackground/index";

const RegisterPage = () =>{

    return(
   
        <>
        <main id="LoginPage">

        <SpaceBackground component={<RegisterSpace/>}/>   

        </main>
         
        </>
  
    );
}

export default RegisterPage;