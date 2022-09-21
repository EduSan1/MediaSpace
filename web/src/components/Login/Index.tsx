import React from "react";
import InputLoign from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import { AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook, MdEmail, MdLock } from "react-icons/md";
import { IconBase } from "react-icons";


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
            <span className="input-container">
              <InputLoign typeInput={'email'} name={'loginText'} placeholder={"username@mediaspace.com"} icon={<MdLock className="IconLogin" />} />
              
            </span>
          </div>

          <div className="btnLogin">
            <span> Esqueceu a senha?</span>

            <div className="btn_AutomaticLogin">
              <InputBtn />
              <div>
                <h5> login com </h5>
                <div className="loginIcons">

                  <span>
                    <MdFacebook onClick={() => { console.log('Facebook') }} />
                  </span>

                  <span>
                    <AiFillGoogleCircle />
                  </span>

                  <span>
                    <AiFillLinkedin />
                  </span>

                  <span>
                    <AiFillTwitterCircle />
                  </span>



                </div>


              </div>
            </div>

          </div>

        </div>



      </main>

    </>

  );

}

export default LoginSpace;