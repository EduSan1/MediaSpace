import React, { useEffect, useState, Component } from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import TitleIndex from "../../components/utils/TitleMain/Index";
import InputLogin from "../../components/utils/Input/LoginInput";
import InputBtn from "../../components/utils/Button/InputBtn";
import api from "../../service";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';

const RecoveryPassword = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({

    "mail": "",


  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target)
    setUser({ mail : event.target.value})

  };


  const [hasError, setHasError] = React.useState(false);


  const handleChangeErro = (erroMsg: string) => {

    console.log(erroMsg);

  };

  const validate = () => {
    let validate = true;

    if (!user.mail) {
      handleChangeErro(user.mail);
      validate = false;
      setHasError(true);

    }

    if (validate) {

      console.log('next');

    }

    mailPasswordRecovery()



  }

  const mailPasswordRecovery = async () => {
   

    await api.post("/user/recoverPassword", user).then((res : any) => {
      if (res.data.hasSend === true ) {
        navigate("recoveryemailsent")
      }else {
        window.alert("não foi possivel encontrar o email")
      }

    })
      .catch((error) => {
        setHasError(true);
        console.log(error)
      });
  }


  return (

    <main id="RecoveryPassword">

      <div className="ContainerImg_recoveryPassword">

        <ImageComponent alt="" src="../assets/img/rocketart.png" className="Img_RecoveryPassword" />

      </div>

      <div className="ContainerInputs_recoveryPassword">
        <span className="newHere_recoveryPassword">
          <h3>Nova aqui? </h3>
          <Link to='/register'>
            <h3>Cadastre-se </h3>
          </Link>

        </span>

        <div className="Tittle_input_btn_passWord">

          <TitleIndex classNameText="tittle_forgetPassword" idConatinerDiv="div_tittle_forgetPassword" title="Esqueceu a Senha?" />

          <span className="subtittle_span">
            <h3 className="subTittle_forgetPassword">
              Enviaremos um  email  para autenticaçào e reecuperação de senha
            </h3>
          </span>


          <span className="btn_span">
            <InputLogin label="Email" hasError={hasError} typeInput={'email'} name={'mail'} placeholder={"username@mediaspace.com"} icon={<BsFillPersonFill />} className={hasError ? "InputError" : "Input_PassWordRecovery"}
              valueLogin={user.mail} handleChange={handleChange} maxlength={300} />
          </span>


        </div>

        <span className="btn_Send">
          {/* <Link to="recoveryemailsent"> */}
            <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnPassWord'} valueBtn={'Enviar'}
              onClick={() => {
                validate();
              }} />
          {/* </Link> */}


        </span>

      </div>


    </main>

  );

}


export default RecoveryPassword;