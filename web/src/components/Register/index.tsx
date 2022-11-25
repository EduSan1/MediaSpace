import React, { ReactHTMLElement, useEffect, useState } from "react";
import InputLogin from "../utils/Input/LoginInput";
import InputBtn from "../utils/Button/InputBtn";
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from 'firebase/storage';
import { MdPersonOutline, MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import { HiOutlineIdentification } from "react-icons/hi";
import { RiCalendar2Line } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaLock } from "react-icons/fa";
import InputRadio from "../utils/Input/InputRadio";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { storage } from "../../constants/firebase";
import { cpfMask, phoneMask, onlyLetters, passwordMask, onlyNumbers } from "../../service/Regex/regex";
import ButtonIcon from "../utils/Button/ButtonIcon";

import api from "../../service";

const RegisterSpace = () => {

    const [user, setUser] = React.useState({
        first_name: '',
        last_name: '',
        nickname: '',
        phone: {
            ddd: "11",
            phone: ""
        },
        birth_date: '',
        profile_picture: 'https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfreelancerBaseProfile.png?alt=media&token=61fb92c6-82c5-4245-a621-91470ba196b8',
        cpf: '',
        mail: '',
        gender: {
            id: ""
        },
        password: '',
        biography: '',
    })

    const [typePassword, setTypePassoword] = useState(false)


    console.log(user)

    const navigate = useNavigate()

    const [genders, setGenders] = useState([{}])
    const [hasErrors, setHasErros] = React.useState(false)


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
        console.log(user);

    }
    const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, gender: {
                id: event.target.value
            }
        })

    }
    const handleCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user, [event.target.name]: cpfMask(event.target.value)

            //...user, [event.target.name]: event.target.value

        })
    }
    const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(user.phone.phone.split)
        setUser({
            // ...user, [event.target.name]: phoneMask(event.target.value)
            ...user, phone: {
                ddd: "",
                phone: phoneMask(event.target.value)



            }
            //...user, [event.target.name]: onlyNumbers(event.target.value)
        })
    }
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log(onlyLetters.exec(event.target.value))
        let teste: any
        if (onlyLetters.exec(event.target.value) != null) {
            teste = onlyLetters.exec(event.target.value)

            setUser({
                ...user, [event.target.name]: teste
            })
        }







    }


    const validation = () => {

        let validate = true;

        if (!user.first_name) {
            validate = false;
            setHasErros(true);
        } else {

        }

        if (!user.last_name) {
            validate = false;
            setHasErros(true);
        } else {

        }

        if (!user.nickname) {
            validate = false;
            setHasErros(true)
        } else {

        }

        if (!user.cpf) {
            validate = false;
            setHasErros(true)
        } else {

        }
        if (!user.birth_date) {
            validate = false;
            setHasErros(true)
        } else {

        }

        if (!user.mail) {
            validate = false;
            setHasErros(true)
        } else {

        }

        return validate;

    }

    const uploadImage = (event: any) => {
        event.preventDefault();
        const file = event.target[0].files[0]

        if (!file) return

        const storageRef = ref(storage, `profilePicture/${file.name}`)
        const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)

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

        const phone = user.phone.phone.split(" ")

        const userToSend = {
            ...user,
            cpf: onlyNumbers(user.cpf),
            phone: {
                ddd: onlyNumbers(phone[0]),
                phone: onlyNumbers(phone[1])
            },
        }

        console.log(userToSend)



        api.post("/user", userToSend).then((res) => {

            if (res.data.statusCode !== 201) {
                console.log(res.data);


                if (res.data.mail) {
                    window.alert("Email já existente")
                    setHasErros(true);
                }
                if (res.data.cpf) {
                    window.alert("CPF já existente")
                    setHasErros(true);
                }
                if (res.data.phone) {
                    window.alert("Telefone já existente")
                    setHasErros(true);
                }
                if (res.data.nickname) {
                    window.alert("nickname já existente")
                    setHasErros(true);
                }



            } else {
                navigate(`provideruserregister/${res.data.data.id}`)
            }
        })
    }



    useEffect(() => {
        api.get("/gender").then((res) => {
            setGenders(res.data)
        })
    }, [])




    return (
        <>
            <div className="page_register">
                <div className="title_page" >
                    <h1>Faça seu Cadastro</h1>
                </div>
                <div className="container_inputs">
                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={user.first_name} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={"text"} placeholder={"Nome"} icon={<MdPersonOutline className="IconLogin" />} name={"first_name"} label={"Nome"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={50} />

                        <InputLogin valueLogin={user.last_name} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleName(event) }} typeInput={"text"} placeholder={"Sobrenome"} icon={<MdPersonOutline className="IconLogin" />} name={"last_name"} label={"Sobrenome"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={150} />

                        <InputLogin valueLogin={user.nickname} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"text"} placeholder={"Nickname"} icon={<MdOutlineAlternateEmail className="IconLogin" />} name={"nickname"} label={"Nickname"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={25} />

                        <InputLogin valueLogin={user.phone.phone} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handlePhone(event) }} typeInput={"tel"} placeholder={"Celular"} icon={<FiPhone className="IconLogin" />} name={"phone"} label={"Celular"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={14} />

                        <InputLogin valueLogin={user.cpf} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleCPF(event) }} typeInput={"string"} placeholder={"CPF"} icon={<HiOutlineIdentification className="IconLogin" />} name={"cpf"} label={"CPF"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={15} />
                    </div>

                    <div className="alignment-inputs-by-divs">
                        <InputLogin valueLogin={user.mail} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"email"} placeholder={"Email"} icon={<AiOutlineMail className="IconLogin" />} name={"mail"} label={"Email"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={250} />

                        <span>
                            <InputLogin valueLogin={user.password} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={typePassword ? "text" : "password"} placeholder={"Senha"} icon={<MdLockOutline className="IconLogin" />} name={"password"} label={"Senha"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={255} />


                            <button className="Passeyes" onClick={() => {
                                setTypePassoword(!typePassword)
                            }}>
                                {<FaLock />}
                            </button>
                        </span>


                        <InputLogin valueLogin={user.birth_date} hasError={hasErrors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => { handleChange(event) }} typeInput={"date"} placeholder={""} icon={<RiCalendar2Line className="IconLogin" />} name={"birth_date"} label={"Data de nascimento"} className={hasErrors ? "input_register_error" : "input_register"} maxlength={8} />

                        <div className="container_input_radio">
                            <div className="container_label">
                                <label>Gênero</label>
                            </div>
                            <div className="container_options">
                                {
                                    genders?.map((gender: any) => {
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
                                <div className="picture-pattern">
                                    <img className="picture" src={user.profile_picture} alt="" />
                                </div>

                                <p className="preview-text">Escolha um arquivo jpg, jpeg ,png ou gif</p>

                                <div className="alignment_buttons_photo_profile">

                                    <label className="input_btn_upload_photo" htmlFor="image">
                                        upload
                                    </label>

                                    <input type="file" id="image" accept=".png, .jpg, .jpeg, .gif" name="image" />

                                    <InputBtn typeInput={'submit'}
                                        name={'btn_add_photo'}
                                        className={'input_btn_upload_photo'}
                                        valueBtn={'adicionar imagem'} onClick={() => { }} />

                                    <InputBtn typeInput={'submit'} name={'btn_remove_photo'} className={'input_btn_remove_photo'} valueBtn={'Remover imagem'} onClick={() => { user.profile_picture = "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/profilePicture%2FIconFreelancer.png?alt=media&token=ee6655ad-113c-40e0-9c3e-ef10b9c9bb57" }} />
                                </div>
                            </form>
                        </div>
                        <div className="container_text_area">
                            <div className="container_label">
                                <label>Sobre</label>
                            </div>
                            <div>
                                <textarea name="biography" className="biography" />
                            </div>

                        </div>
                        <div className="container_button">
                            <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={'input_btn_cadastrar'} valueBtn={'Cadastrar'} onClick={() => {

                                if (validation()) {
                                    registerUser();
                                }




                            }} />
                        </div>

                    </div>


                </div>
                <span className="back_link_login">
                    <Link to={"/"} className="link_to_back_login">Voltar a tela de login</Link>
                </span>

            </div>

        </>
    )
}

export default RegisterSpace;