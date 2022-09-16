import React from "react";
import InputLoign from "./inputLogin";


const LoginSpace = () => {

  return (

    <>

      <main className="SpaceLogin">

        <div className="ImageSpaceLogin" >
          <img src="../assets/img/rocketart.png" alt="" />
        </div>

        <div className="LoginSpace">
          <div className="newHere">

            <span>Nova aqui? </span>  
            <span> Cadastre-se </span> 
            
          </div>

          <div className="TittleWelcomeBack">
            <h1> Bem vindo de volta! </h1>
            <p> Faça login para continuar </p>
          </div>
                 
                  <div className="inputLogin">
                         <InputLoign/>
                  </div>

        </div>



      </main>

    </>

  );

}

export default LoginSpace;