import React, { useEffect, useState, Component } from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import TitleIndex from "../../components/utils/TitleMain/Index";
import InputBtn from "../../components/utils/Button/InputBtn";
import InputLoign from "../../components/utils/Input/LoginInput";
import api from "../../service";
import { BsFillPersonFill} from "react-icons/bs";


const RecoveryPassword = () => {
    const [diceLogin, setDiceLogin] = useState({

        "mail": "",
        
    
      });
    
      const erros = {
        "mail": diceLogin.mail,
       
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
          validate = false;
          setHasError(true);
    
    
        } else {
    
        }
    
    
        if (validate) {
          
          console.log('next');
          
    
        } else {
    
        }
    
    
    
    
      }
    
      const mailPasswordRecovery = async () => {
    
        await api.post("/user/login", diceLogin).then((res) => {
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
                        <InputLoign hasError={hasError} typeInput={'email'} name={'mail'} placeholder={"username@mediaspace.com"} icon={<BsFillPersonFill/>} className={hasError ? "InputError" : "Input_PassWordRecovery"}
                            valueLogin={diceLogin.mail} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event)}/>
                    </span>


                </div>

                <span className="btn_Send">
                    <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnPassWord'} valueBtn={'Enviar'}
                        onClick={() => {
                           validate();
                            console.log('next page');
                        }} />


                </span>

            </div>


        </main>

    );

}


export default RecoveryPassword;