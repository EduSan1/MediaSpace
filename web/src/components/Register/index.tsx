import React, { ReactHTMLElement, useEffect, useState } from "react";
import InputLogin from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import { FaUserAlt } from "react-icons/fa";
import {getDownloadURL, ref, uploadBytesResumable, UploadTask} from 'firebase/storage'
import { MdEmail, MdLock, MdPersonOutline, MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { RiCalendar2Fill, RiCalendar2Line } from "react-icons/ri"
import { FiPhone } from "react-icons/fi"
import { AiOutlineMail } from "react-icons/ai"
import InputRadio from "../utils/Input/InputRadio";
import { storage } from "../../constants/firebase";
import {cpfMask, phoneMask, onlyLetters, passwordMask} from "../../service/Regex/regex";
import api from "../../service";


const RegisterSpace = () => {

    const [user, setUser] = React.useState({
        first_name: '',
        last_name: '',
        nickname: '',
        phone : {
            ddd : "11",
            phone : "912345678"
        },
        birth_date: '',
        profile_picture: '',
        cpf: '',
        mail: '',
        gender: {
            id : ""
        },
        password: '',
        biography: '',
    })

    const [genders,setGenders] = useState([{}])


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
        const validation = true

        if (!passwordMask.test(user.password)) {
            console.log('bota o formato de senha certo meu parceiro')
        }

    }

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
        console.log(user)
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
                        <InputLogin valueLogin={user.first_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={"text"} placeholder={"Nome"} icon={<MdPersonOutline className="IconLogin" />} name={"first_name"} label={"Nome"} className={"inputRegister"} />

                       <InputLogin valueLogin={user.last_name} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={"text"} placeholder={"Sobrenome"} icon={<MdPersonOutline className="IconLogin" />} name={"last_name"} label={"Sobrenome"} className={"inputRegister"} /> 

                        <InputLogin valueLogin={user.nickname} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Nickname"} icon={<MdOutlineAlternateEmail className="IconLogin" />} name={"nickname"} label={"Nickname"} className={"inputRegister"} />

                        {/* <InputLogin valueLogin={user.phone.phone} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"tel"} placeholder={"Celular"} icon={<FiPhone className="IconLogin" />} name={"phone"} label={"Celular"} className={"inputRegister"} /> */}

                        <InputLogin valueLogin={user.cpf} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"CPF"} icon={<HiOutlineIdentification className="IconLogin" />} name={"cpf"} label={"CPF"} className={"inputRegister"} /> 
                    </div>

                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={user.mail} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"email"} placeholder={"Email"} icon={<AiOutlineMail className="IconLogin" />} name={"mail"} label={"Email"} className={"inputRegister"} />

                        <InputLogin valueLogin={user.password} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Senha"} icon={<MdLockOutline className="IconLogin" />} name={"password"} label={"Senha"} className={"inputRegister"} />

                        <InputLogin valueLogin={user.birth_date} hasError={false} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"date"} placeholder={""} icon={<RiCalendar2Line className="IconLogin" />} name={"birth_date"} label={"Data de nascimento"} className={"inputRegister"} />

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

                                <img className="picture-pattern" src="./assets/img/register/profile.svg" alt="" />
                                <input type="file" />
                                <p className="preview-text">Escolha um arquivo jpg, png, gif...</p>

                                <div className="alignment_buttons_photo_profile">
                                    <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_upload_photo'} valueBtn={'Upload'} onClick={() => { }} />
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
                                registerUser();
                            }} />
                        </div>

                    </div>


                </div>
            </div>

        </>
    )
}

export default RegisterSpace;