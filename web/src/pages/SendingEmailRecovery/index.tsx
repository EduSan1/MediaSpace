import React from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import TitleIndex from "../../components/utils/TitleMain/Index";
import InputBtn from "../../components/utils/Button/InputBtn";


const SendingEmailRecovery = () => {

    return (


        <main id="SendingRecovery">


            <div className="div_Container_img">
                <ImageComponent className="image_Logo" alt="" src="../assets/img/rocketart.png" />
            </div>

            <div className="div_Container_MailSend">
                <TitleIndex classNameText="Tittle_SendEmail" idConatinerDiv="Container_sendEmail" title="Email Enviado!!" />
                <span>
                <h3>Aguarde o email para realizar a recuperação de senha</h3>
                </span>
                
                <span className="Span_imgCenter">
                <ImageComponent className="image_Logo" alt="" src="../assets/img/artConfirme.svg" />
                </span>
                
                <span className="span_inputNext_SendEmail">
                <InputBtn typeInput={'submit'} name={'btnLogin'} className={'InputBtnSendEmail'} valueBtn={'Continuar'}
                    onClick={() => {
                          console.log('next page');
                    }} />

                </span>
              
            </div>
            <div className="div_Container_newRegister">
                <span className="new_Register_Span">
                    <h3>  Novo aqui?</h3>
                    <h3>  Cadastre-se</h3>
                </span>


            </div>



        </main>




    );



}


export default SendingEmailRecovery;