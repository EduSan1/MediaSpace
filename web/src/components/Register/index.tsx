import React, { ReactHTMLElement, useEffect, useState } from "react";
import InputLogin from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import {getDownloadURL, ref, uploadBytesResumable, UploadTask} from 'firebase/storage'
import { MdPersonOutline, MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { RiCalendar2Line } from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import InputRadio from "../utils/Input/InputRadio";
import { storage } from "../../constants/firebase";
import {cpfMask, phoneMask, onlyLetters, passwordMask} from "../../service/Regex/regex";
import api from "../../service";

import { Link } from "react-router-dom";

const RegisterSpace = () => {

  

    const [user, setUser] = React.useState({
        first_name: '',
        last_name: '',
        nickname: '',
        phone : {
            ddd : "",
            phone : ""
        },
        birth_date: '',
        profile_picture:'https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/profilePicture%2FIconFreelancer.png?alt=media&token=ee6655ad-113c-40e0-9c3e-ef10b9c9bb57',
        cpf: '',
        mail: '',
        gender: {
            id : ""
        },
        password: '',
        biography: '',
    })

    const [genders,setGenders] = useState([{}])
    const [hasErrors, setHasErros] = React.useState(false)



    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })

    }    
    const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, gender: {
                id : event.target.value
            }
        })

    }
    const handleCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [event.target.name]: cpfMask(event.target.value)
        })
    }
    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [event.target.name]: phoneMask(event.target.value)
        })
    }
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {

        const validation = onlyLetters.test(event.target.value)

        if (validation) {
            setUser({
                ...user, [event.target.name]: event.target.value
            })
        }
    }
    const validation = () => {
        let validate = false

      if(!user.first_name){
        setHasErros(true)
        validate= true }
    //   }else if(inputs.last_name){
    //     console.log("sobrenome")
    //   }else if(inputs.nickname){
    //     console.log("nickname")
    //   }else if(inputs.cpf){
    //     console.log("cpf")
    //   }else if(inputs.birth_date){
    //     console.log("birth_date")
    //   }else if(inputs.mail){
    //     console.log("mail")
    //   }else if(inputs.password){
    //     console.log("senha")
    //   }

        // if(!inputs.first_name || !inputs.last_name || !inputs.nickname || !inputs.cpf || !inputs.birth_date || !inputs.mail || !inputs.password ){
        //     console.log("Por  favor, preencha o campo obrigatório");
        // if(!inputs.last_name){
        //     console.log("Por  favor, preencha o campo obrigatório");
        // }

        if (!passwordMask.test(user.password)) {
            console.log('bota o formato de senha certo meu parceiro')
        }

    }

    // useEffect(() => {
    //     console.log(inputs)
    // }, [inputs])

    const uploadImage = (event: any) => {
        event.preventDefault();
        const file = event.target[0].files[0]

        console.log(file)

        if (!file) return

        const storageRef = ref(storage, `profilePicture/${file.name}`)
        const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)

        console.log(uploadTask)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

            },
            error => { alert(error) },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                    setUser({ ...user, "profile_picture": url })
                })
            }
        )
    }

    const registerUser = () => {
        api.post("/user", user).then((res) => {
            console.log(res.data)
        })
    }

    useEffect(() => {
        api.get("/gender").then((res) => {
                setGenders(res.data)
        })
    }, [])

    useEffect(() => {
  console.log(user.gender)
    }, [user])

    
    return (
        <>
            <div className="page_register">
                <div className="title_page" >
                    <h1>Faça seu Cadastro</h1>
                </div>
                <div className="container_inputs">
                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={user.first_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={"text"} placeholder={"Nome"} icon={<MdPersonOutline className="IconLogin" />} name={"first_name"} label={"Nome"} className={"inputRegister"} maxlength={50} />

                       <InputLogin valueLogin={user.last_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={"text"} placeholder={"Sobrenome"} icon={<MdPersonOutline className="IconLogin" />} name={"last_name"} label={"Sobrenome"} className={"inputRegister"} maxlength={150}/> 

                        <InputLogin valueLogin={user.nickname} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Nickname"} icon={<MdOutlineAlternateEmail className="IconLogin" />} name={"nickname"} label={"Nickname"} className={"inputRegister"} maxlength={25} />
                       
                        <InputLogin valueLogin={user.phone.phone} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handlePhone(event) }} typeInput={"tel"} placeholder={"Celular"} icon={<FiPhone className="IconLogin" />} name={"phone"} label={"Celular"} className={"inputRegister"} maxlength={9}/>

                        <InputLogin valueLogin={user.cpf} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleCPF(event) }} typeInput={"text"} placeholder={"CPF"} icon={<HiOutlineIdentification className="IconLogin" />} name={"cpf"} label={"CPF"} className={"inputRegister"} maxlength={14}/> 
                    </div>

                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={user.mail} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"email"} placeholder={"Email"} icon={<AiOutlineMail className="IconLogin" />} name={"mail"} label={"Email"} className={"inputRegister"} maxlength={250}/>

                        <InputLogin valueLogin={user.password} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Senha"} icon={<MdLockOutline className="IconLogin" />} name={"password"} label={"Senha"} className={"inputRegister"} maxlength={255}/>

                        <InputLogin valueLogin={user.birth_date} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"date"} placeholder={""} icon={<RiCalendar2Line className="IconLogin" />} name={"birth_date"} label={"Data de nascimento"} className={"inputRegister"} maxlength={0}/>

                        {/* <InputRadio label="Genero" options={genders} name="genero" /> */}
                        <div className="container_input_radio">
                            <div className="container_label">
                                <label>Gênero</label>
                            </div>
                                <div className="container_options">
                                {
                                    genders?.map((gender : any) => {
                                        return <InputRadio handleChange={handleGender} name="genero" value={gender.gender} id={gender.id} />
                                    }) 
                                }

                                </div>
                            </div>  
                        </div>
                    <div className="alignment-inputs-by-divs">
                        <div className="profile-picture">
                            <div className="container_label">
                                <label> Foto de perfil </label>
                            </div>
                            <form onSubmit={uploadImage} className="profile-picture-container">
                                <div  className="picture-pattern">
                                    <img className="picture" src={user.profile_picture} alt="" />
                                </div>
                                
                               

                                <p className="preview-text">Escolha um arquivo jpg, png, gif...</p>

                                <div className="alignment_buttons_photo_profile">
                                    <label className="teste" htmlFor="image">Upload</label>
                                    <input type="file" name="teste" id="image"/>
                                    {/* <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_upload_photo'} valueBtn={'Upload'} onClick={() => {}} /> */}
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
                                validation();
                            }} />
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default RegisterSpace;