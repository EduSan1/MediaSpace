import React, { ReactHTMLElement, useEffect, useState } from "react";
import InputLogin from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import { FaUserAlt } from "react-icons/fa";
import {getDownloadURL, ref, uploadBytesResumable, UploadTask} from 'firebase/storage'
import { MdPhone, MdEmail, MdLock } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { RiCalendar2Fill } from "react-icons/ri"
import InputRadio from "../utils/Input/InputRadio";
import { storage } from "../../constants/firebase";

const RegisterSpace = () => {
    
    const cpfMask = (value:any) => {
        return value
          .replace(/\D/g, '') 
          .replace(/(\d{3})(\d)/, '$1.$2') 
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1') 
      }

    const phoneMask = (value:any) =>{
        return value
            .replace(/\D/g, '')
            .replace(/^(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4}).*/, "$1-$2");
    }

    const [inputs, setInputs] = React.useState({
        first_name: '',
        last_name: '',
        nickname: '',
        phone: '',
        birth_date: '',
        profile_picture: '',
        cpf: '',
        mail: '',
        gender: '',
        password: '',
        biography: '',
    })


    const onlyLetters = new RegExp("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ']+$");


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'password'){
            
        }
        setInputs({
            ...inputs, [event.target.name]: event.target.value
        })
    }

    const handleCPF = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInputs({
            ...inputs, [event.target.name]: cpfMask(event.target.value)
        })
    }

    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs, [event.target.name]: phoneMask(event.target.value)
        })
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {

        const validation = onlyLetters.test(event.target.value)

        console.log(event.target.value)
        if (validation) {
               setInputs({
            ...inputs, [event.target.name]: event.target.value
        })
        }
    }

    // useEffect(() => {
    //  console.log(inputs)
    // }, [inputs])

    const uploadImage = (event :  any ) => {
        event.preventDefault();
        const file = event.target[0].files[0]

        console.log(file)

        if (!file) return

        const storageRef = ref(storage, `profilePicture/${file.name}`)
        const uploadTask : UploadTask = uploadBytesResumable(storageRef, file)

        console.log(uploadTask)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                
            },
            error => { alert(error) },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url : string) => {
                    setInputs({...inputs, "profile_picture" : url})
                })
            }
        )
        
    }

    return (
        <>
            <div className="page_register">
                <div className="title_page" >
                    <h1>Faça seu Cadastro</h1>
                </div>
                <div className="container_inputs">
                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={inputs.first_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName((event)) }} typeInput={"text"} placeholder={"Nome"} icon={<FaUserAlt className="IconLogin" />} name={"first_name"} label={"Nome"} className={"inputRegister"} />

                       <InputLogin valueLogin={inputs.last_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={"text"} placeholder={"Sobrenome"} icon={<FaUserAlt className="IconLogin" />} name={"last_name"} label={"Sobrenome"} className={"inputRegister"} /> 

                        <InputLogin valueLogin={inputs.nickname} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Nickname"} icon={<FaUserAlt className="IconLogin" />} name={"nickname"} label={"Nickname"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.phone} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handlePhone(event) }} typeInput={"tel"} placeholder={"Celular"} icon={<MdPhone className="IconLogin" />} name={"phone"} label={"Celular"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.cpf} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleCPF(event) }} typeInput={"text"} placeholder={"CPF"} icon={<HiIdentification className="IconLogin" />} name={"cpf"} label={"CPF"} className={"inputRegister"} /> 
                    </div>

                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={inputs.mail} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"email"} placeholder={"Email"} icon={<MdEmail className="IconLogin" />} name={"mail"} label={"Email"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.password} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Senha"} icon={<MdLock className="IconLogin" />} name={"password"} label={"Senha"} className={"inputRegister"} />

                        <InputLogin valueLogin={inputs.birth_date} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"date"} placeholder={""} icon={<RiCalendar2Fill className="IconLogin" />} name={"birth_date"} label={"Data de nascimento"} className={"inputRegister"} />

                        <InputRadio label="Genero" options={["Feminino", "Masculino", "Outro"]} name="genero" />
                    </div>
                    <div className="alignment-inputs-by-divs">
                        <div className="profile-picture">
                            <div className="container_label">
                                <label> Foto de perfil </label>
                            </div>
                            <form onSubmit={uploadImage} className="profile-picture-container">

                                <img className="picture-pattern" src="./assets/img/register/profile.svg" alt="" />
                                    <input type="file" />
                                <p className="preview-text">Escolha um arquivo jpg, png, gif...</p>

                                <div className="alignment_buttons_photo_profile">
                                    <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_upload_photo'} valueBtn={'Upload'}  onClick={() => {}} />
                                    <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_remove_photo'} valueBtn={'Remover imagem'} onClick={() => {
                                        ("teste");
                                    }} />
                                </div>
                            </form>
                        </div>
                        <div className="container_text_area">
                            <div className="container_label">
                                <label>Sobre</label>
                            </div>
                            <div>
                                <textarea name="biography" id="biography" className="biography" ></textarea>
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