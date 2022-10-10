import React from "react";
import LoginSpace from "../../components/Login";
import SpaceBackground from "../../components/SpaceBackground/index";

const LoginPage = () =>{

    return(
   
        <>
        <main id="LoginPage">

        <SpaceBackground component={<LoginSpace/>}/>   

        </main>
         
        </>
  
    );
}

export default LoginPage;