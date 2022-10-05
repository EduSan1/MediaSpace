import React from "react";
import TitleIndex from "../utils/TitleMain/Index";
import ImageComponent from "../utils/imageComponent/imageComponent";




const ConcludeRegister = () => {

    return (












        <div id="div-ConcludeRegister">
            <div className="Container-Conclude-Register">

                <span className="span_tItle_conclude">
                    <TitleIndex title="Conclua o Cadastro" idConatinerDiv="Title-main-conclude" classNameText="Title-Main" />
                </span>



                <h3>Aguarde o e-mail para confirmação do cadastro</h3>

                <ImageComponent src="../assets/img/Email.svg" className="imgEmail" alt="" />
 
            </div>   

            <span className="Back_Login">
                      <h3>Voltar a Tela De</h3>
                      <h3>Login</h3>
            </span>

        </div>












    );

}

export default ConcludeRegister;