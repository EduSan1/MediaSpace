import React from "react";




const PerfilCard = () => {


    return (
        <div className="perfil_card">
            <div className="photo_and_name_user">
                <div className="img_photo_user">
                    <img src="../assets/img/astronaut.svg" alt="" />
                </div>

                <span className="InfoName_user">
                    <h2>marcus</h2>
                    <h4>@MarcusLindo</h4>
                </span>
            </div>

            <div className="fallow_project">
                <span>
                    <h2>5.2k</h2>
                    <h3>seguindo</h3>
                </span>
                <span>
                    <h2>12</h2>
                    <h3>projetos</h3>
                </span>

            </div>
            <span className="line"></span>

            <span className="description_user">
                <p>
                    Texto é uma manifestação da linguagem, uma mensagem usada para transmitir informação de um autor para um leitor. Um texto é uma manifestação da linguagem. Pode ser definido como tudo aquilo que é dito por um emissor e interpretado por um receptor. Dessa forma, tudo que é interpretável é um texto.
                </p>
            </span>

            <div>

            </div>
        </div>

    )

}




export default PerfilCard;