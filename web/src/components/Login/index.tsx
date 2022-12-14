import React, { useEffect, useState, Component } from "react";
import InputLoign from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import { AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook, MdLockOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import api from "../../service";
import { Link, Route, useNavigate } from 'react-router-dom';



const LoginSpace = () => {

  const navigation = useNavigate();
  const [diceLogin, setDiceLogin] = useState({

    "mail": "",
    "password": ""

  });

  const erros = {
    "mail": diceLogin.mail,
    "password": "Senha ou Email invalido"
  }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiceLogin({
      ...diceLogin,
      [event.target.name]: event.target.value

    })

  };




  const [hasError, setHasError] = React.useState(false);


  const handleChangeErro = (erroMsg: string) => {

    console.log(erroMsg);

  };

  const logIntUser = async (diceUser: string) => {
    await localStorage.setItem('userDetails', diceUser);

  }


  const validate = () => {
    let validate = true;

    if (!diceLogin.mail) {
      handleChangeErro(diceLogin.mail);
      validate = false;
      setHasError(true);


    }

    if (!diceLogin.password) {
      window.alert('Senha ou Email invalido')
      handleChangeErro('Senha ou Email invalido');
      validate = false;
      setHasError(true);
    }

    if (validate) {
      loginUser();

    }



  }





  const loginUser = async () => {

    await api.post("/user/login", diceLogin).then((res) => {
      const data = res.data;


      if (res.data.is_logged) {
        logIntUser(res.data.userDetails)
        navigation('/home');

      } else {
        window.alert(res.data.message)
        setHasError(true);
      }

      return data;


    })
      .catch((error) => {
        setHasError(true);
        console.log(error)
      });


  }


  return (

    <>


      <div className="ImageSpaceLogin" >
        <img src="../assets/img/rocketart.png" alt="" />
      </div>



      <div className="LoginSpace">
        <div className="newHere">

          <span>Nova aqui? </span>
          <Link to='register'>
            <span> Cadastre-se </span>
          </Link>

        </div>

        <div className="TittleWelcomeBack">
          <h1> Bem vindo de volta! </h1>
          <p> Fa??a login para continuar </p>
        </div>

        <div className="inputLogin">

          <InputLoign disable={false} hasError={hasError} label={"email"} typeInput={'email'} name={'mail'} placeholder={"username@mediaspace.com"} icon={<AiOutlineMail />} className={hasError ? "InputError" : "Input_Login"}
            valueLogin={diceLogin.mail} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} maxlength={250}
          />
          <InputLoign disable={false} hasError={hasError} label={"senha"} typeInput={'password'} name={'password'} placeholder={"senha"} icon={<MdLockOutline />} className={hasError ? "InputError" : "Input_Login"}
            valueLogin={diceLogin.password} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} maxlength={250}
          />
        </div>

        <div className="btnLogin">
          <Link to='recoverpassword'>
            <span className="forguetPass">
              <h5>Esqueceu a senha?</h5>
            </span>
          </Link>

          <div className="btn_AutomaticLogin">
            <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnLogin'} valueBtn={'Login'}
              onClick={() => {
                validate()
              }} />

            <div className="LoginIcons-container">

              <div className="loginIcons">


              </div>
            </div>
          </div>

        </div>
      </div>

    </>

  );

}

export default LoginSpace;