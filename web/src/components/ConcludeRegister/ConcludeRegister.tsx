import React from "react";
import TitleIndex from "../utils/TitleMain/Index";
import ImageComponent from "../utils/imageComponent/imageComponent";



const ConcludeRegister = () => {

    return (

        <>
            <main id="Main-ConcludeRegister">



                <div className="Container-Conclude-Register">

                    <TitleIndex title="Conclua o Cadastro" idConatinerDiv="Title-main-conclude" classNameText="Title-Main" />

                    <h3>Aguarde o e-mail para confirmação do cadastro</h3>

                    <ImageComponent src="../assets/img/Email.svg" className="imgEmail" alt="" />

                </div>


            </main>


        </>


    );

}

export default ConcludeRegister;