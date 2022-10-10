import React from "react";
import TitleIndex from "../utils/TitleMain/Index";
import ImageComponent from "../utils/imageComponent/imageComponent";
import { Link } from 'react-router-dom';

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
                      <h3>Voltar a tela de</h3>
                      <Link to="/">
                      <h3>Login</h3>
                      </Link>
            </span>

        </div>

    );

}

export default ConcludeRegister;