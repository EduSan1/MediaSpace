import React, { useEffect, useState } from "react";
import InputLogin from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import { FaUserAlt } from "react-icons/fa";
import { MdPhone, MdEmail, MdLock } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";


const RegisterSpace = () => {

    const [inputs, setInputs] = React.useState({
        first_name: '',
        last_Name: '',
        nickname: '',
        phone: '',
        birth_date: '',
        cpf: '',
        mail: '',
        password: '',
        biography: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs, [event.target.name]: event.target.value
        })
    }

    const teste = inputs.first_name.match("^[A-z]{1,50}$");
    console.log(teste);




    return (
        <>
            <div className="page_register">
                <div className="title_page" >
                    <h1>Faça seu Cadastro</h1>
                </div>
                <div className="container_inputs">
                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={inputs.first_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Nome"} icon={<FaUserAlt className="IconLogin" />} name={"first_name"} label={"Nome"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.last_Name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Sobrenome"} icon={<FaUserAlt className="IconLogin" />} name={"last_name"} label={"Sobrenome"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.nickname} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Nickname"} icon={<FaUserAlt className="IconLogin" />} name={"nickname"} label={"Nickname"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.phone} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"tel"} placeholder={"Celular"} icon={<MdPhone className="IconLogin" />} name={"phone"} label={"Celular"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.cpf} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"CPF"} icon={<HiIdentification className="IconLogin" />} name={"cpf"} label={"CPF"} className={"inputRegister"} />
                    </div>

                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={inputs.mail} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"email"} placeholder={"Email"} icon={<MdEmail className="IconLogin" />} name={"mail"} label={"Email"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.password} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Senha"} icon={<MdLock className="IconLogin" />} name={"password"} label={"Senha"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.birth_date} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"date"} placeholder={""} icon={<FaUserAlt className="IconLogin" />} name={"birth_date"} label={"Data de nascimento"} className={"inputRegister"} />
                    </div>
                    <div className="alignment-inputs-by-divs">
                        <div className="profile-picture">
                            <div className="container_label">
                                <label> Foto de perfil </label>
                            </div>
                            <div className="profile-picture-container">
                                <div className="teste-foto">
                                    <img src="./assets/img/register/profile.svg" alt="" />
                                </div>
                                <p className="preview-text">Escolha um arquivo jpg, png, gif...</p>

                                <div className="alignment_buttons_photo_profile">
                                        <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_upload_photo'} valueBtn={'Upload'} onClick={() => {
                                        ("teste");
                                    }} />
                                    <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_remove_photo'} valueBtn={'Remover imagem'} onClick={() => {
                                        ("teste");
                                    }} />
                                </div>
                               
                            </div>
                        </div>
                        <div className="container_text_area">
                            <div className="container_label">
                                <label>Sobre</label>
                            </div>
                            <div>
                                <textarea name="biography" id="biography" className="biography"></textarea>
                            </div>
                            
                        </div>
                        <div>
                            <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_cadastrar'} valueBtn={'Cadastrar'} onClick={() => {
                                ("teste");
                            }} />
                        </div>
                       
                    </div>


                </div>
            </div>

        </>
    )
}

export default RegisterSpace;