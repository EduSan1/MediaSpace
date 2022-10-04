import React, { useEffect, useState, Component } from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import TitleIndex from "../../components/utils/TitleMain/Index";
import InputBtn from "../../components/utils/Button/InputBtn";
import InputLoign from "../../components/utils/Input/LoginInput";
import api from "../../service";
import { AiOutlineMail } from "react-icons/ai";

const RecoveryPassword = () => {
  const [mail, setMail] = useState("");

  const erros = {
    "mail": mail,
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value)
  };

  useEffect(() => {
    console.log(mail)
  }, [mail]);


  const [hasError, setHasError] = React.useState(false);


  const handleChangeErro = (erroMsg: string) => {

    console.log(erroMsg);

  };



  const validate = () => {

    if (mail == "") {
      handleChangeErro(mail);
      setHasError(true);
      return

    } else {
      SendMail()
    }




  }

  const SendMail = async () => {

    await api.post("/user/login", mail).then((res) => {
      const data = res.data;


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
          <h3>Cadastre-se </h3>
        </span>

        <div className="Tittle_input_btn_passWord">

          <TitleIndex classNameText="tittle_forgetPassword" idConatinerDiv="div_tittle_forgetPassword" title="Esqueceu a Senha?" />

          <span className="subtittle_span">
            <h3 className="subTittle_forgetPassword">
              Enviaremos um  email  para autenticaçào e reecuperação de senha
            </h3>
          </span>


          <span className="btn_span">
            <InputLoign label="Email" hasError={hasError} typeInput={'email'} name={'mail'} placeholder={"username@mediaspace.com"} icon={<AiOutlineMail />} className={hasError ? "InputError" : "Input_PassWordRecovery"}
              valueLogin={mail} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)} />
          </span>


        </div>

        <span className="btn_Send">
          <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnPassWord'} valueBtn={'Enviar'} onClick={() => validate()} />
        </span>

      </div>


    </main>

  );

}


export default RecoveryPassword;