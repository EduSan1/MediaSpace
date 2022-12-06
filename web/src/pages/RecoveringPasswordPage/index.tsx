import React, { useEffect, useState } from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import InputLoign from "../../components/utils/Input/LoginInput";
import InputBtn from "../../components/utils/Button/InputBtn";
import { passwordMask } from "../../service/Regex/regex";
import api from "../../service";
import { FaLock, FaLockOpen, FaEye } from "react-icons/fa";
import ButtonIcon from "../../components/utils/Button/ButtonIcon";
import { useNavigate } from "react-router-dom";




const RecoveringPasswordPage = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({

        "NewPassword": "",
        "repetePassword": ""

    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };


    const [hasError, setHasError] = React.useState(false);
    const [haspass, setHaspass] = React.useState(false);
    const [hasrepetepass, setHasrepetepass] = React.useState(false);


    const validate = async () => {

        if (user.NewPassword) {
            if (Object.is(user.NewPassword, user.repetePassword)) {
                if (passwordMask.test(user.NewPassword)) {
                    const urlParams = new URLSearchParams(window.location.search);
                    const userId = urlParams.get("user")
                    await api.post(`/user/changePassword/${userId}`, { password: user.NewPassword }).then((res: any) => {
                        if (res.data.statusCode == 200) {
                            navigate("sucess")
                        }
                    })
                        .catch((error) => {
                            console.log(error)
                            window.alert(error)

                        })
                } else {
                    window.alert('A senha tem que conter pelo menos 1 caractere especial, letra maiúscula, letra minuscula e um numero')
                    setHasError(true);
                }
            } else {
               
                window.alert("As Duas senhas devem ser iguais")
                setHasError(true);
            }

        } else {
            
            setHasError(true);
        }



    }


    return (

        <main className="RecoveringPasswordPage">
            <div className="Container_logo">

                <ImageComponent alt="" src="../assets/img/rocketart.png" className="div_img_logo" />

            </div>

            <div className="Container_Input">
                <span className="Span_tow">
                    <InputLoign disable label={"Nova Senha"} className={hasError ? "hasErrorInput" : "Input_one"} placeholder="" name={"NewPassword"} typeInput={!haspass ? "password" : "text"} maxlength={255} valueLogin={user.NewPassword} icon={''} hasError={hasError} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(event);
                    }} />
                    <ButtonIcon className="Passeyes" name="" typeInput="button" valueBtn="" icon={<FaLock onClick={()=>{setHaspass(!haspass)}} />} onClick={() => {
                        
                    }} />


                </span>


                <span className="Span_tow" >
                    <InputLoign disable label={"Reescreva Sua Senha "} className={hasError ? "hasErrorInput" : "Input_two"} placeholder="" name={"repetePassword"} typeInput={!hasrepetepass ? "password" : "text"} maxlength={255} valueLogin={user.repetePassword} icon={<FaLock />} hasError={hasError} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        handleChange(event);

                    }} />
                    <ButtonIcon className="" name="" typeInput="button" valueBtn="" icon={<FaLock onClick={()=>{  setHasrepetepass(!hasrepetepass)}} />} onClick={() => {
                      
                    }} />
                </span>


                <p> Conter pelo menos 1 caractere especial, 1 letra maiúscula, 1 letra minuscula e 1 numero, limite de 255 caracteres. </p>

                <div className="Input_btn">

                    <InputBtn className="Next_NewPassWord" name="Btn_Next_NewPassWord" valueBtn="Confirmar" typeInput="Submit" onClick={() => {

                        validate();
                    }} />


                </div>

            </div>


        </main>

    );


}


export default RecoveringPasswordPage;