import React, { useEffect, useState } from "react";
import InputLoign from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import { AiFillGoogleCircle, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook, MdEmail, MdLock } from "react-icons/md";
import { IconBase } from "react-icons";
import api from "../../service";




const LoginSpace = () => {

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

  useEffect(() => {
    console.log(diceLogin)
  }, [diceLogin]);


  const [hasError, setHasError] = React.useState(false);


  const handleChangeErro = (erroMsg: string) => {

    console.log(erroMsg);

  };

  const validate = () => {
    let validate = true;

    if (!diceLogin.mail) {
      handleChangeErro(diceLogin.mail);
      validate = false
     

    } else {

    }

    if (!diceLogin.password) {

      handleChangeErro('Senha ou Email invalido');
      validate = false
   

    } else {

    }

    if (validate) {
      loginUser();
    }


  }

  const loginUser = async () => {

    await api.post("/User/login", diceLogin).then((res) => {
      const data = res.data;
      console.log(res.data.logged)

    })
      .catch((error) => {
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
            <span> Cadastre-se </span>

          </div>

          <div className="TittleWelcomeBack">
            <h1> Bem vindo de volta! </h1>
            <p> Faça login para continuar </p>
          </div>

          <div className="inputLogin">

            <InputLoign hasError={hasError} label={"email"} typeInput={'email'} name={'mail'} placeholder={"username@mediaspace.com"} icon={<MdEmail/>} className={hasError ? "InputError" : "Input_Login" } 
              valueLogin={diceLogin.mail} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
            <InputLoign hasError={hasError} label={"senha"} typeInput={'password'} name={'password'} placeholder={"senha"} icon={<MdLock/>} className={hasError ? "InputError" : "Input_Login" } 
              valueLogin={diceLogin.password} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}
            />
          </div>

          <div className="btnLogin">
            <span> Esqueceu a senha?</span>

            <div className="btn_AutomaticLogin">
              <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnLogin'} valueBtn={'Login'} onClick={() => {
                validate();
              }} />

              <div className="LoginIcons-container">
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

    </>

  );

}

export default LoginSpace;