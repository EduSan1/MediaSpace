import React from "react";
import InputLoign from "./inputLogin";
import InputBtn from "./InputBtn";
import { MdLock } from "react-icons/md";
import { AiFillFacebook, AiFillGoogleCircle, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";


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
            <MdLock />
            <InputLoign />
            <InputLoign />
          </div>

          <div className="btnLogin">
            <span> Esqueceu a senha?</span>

            <div className="btn_AutomaticLogin">
              <InputBtn />
              <span>login com <AiFillFacebook onClick={() => { console.log('Facebook') }} /> <AiFillGoogleCircle /> <AiFillLinkedin /> <AiFillInstagram /> </span>
            </div>

          </div>

        </div>



      </main>

    </>

  );

}

export default LoginSpace;