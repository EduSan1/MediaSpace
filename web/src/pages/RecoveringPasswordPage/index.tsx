import React, { useEffect, useState } from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import InputLoign from "../../components/utils/Input/LoginInput";
import InputBtn from "../../components/utils/Button/InputBtn";
import { passwordMask } from "../../service/Regex/regex";
import api from "../../service";
import { FaLock } from "react-icons/fa";




const RecoveringPasswordPage = () => {

    const [DiceNewPassword, setDiceNewPassWord] = useState({

        "NewPassword": "",
        "repetePassword": ""

    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiceNewPassWord({
            ...DiceNewPassword,
            [event.target.name]: event.target.value
        })
    };


    useEffect(() => {
        console.log(DiceNewPassword)
    }, [DiceNewPassword])


    const [hasError, setHasError] = React.useState(false);


    const validate = async () => {

        if(DiceNewPassword.NewPassword){
            if(Object.is(DiceNewPassword.NewPassword, DiceNewPassword.repetePassword)){
                if(passwordMask.test(DiceNewPassword.NewPassword)){
                         await api.post("/user/recoverPassword", DiceNewPassword).then(() =>{

                         })
                         .catch(()=>{

                         })
                }else{
                    setHasError(true);
                }   
            }else{
                    setHasError(true);
            }
           
        }else{
            setHasError(true);
        }

          
          
    }


    return (

        <main className="RecoveringPasswordPage">
            <div className="Container_logo">

                <ImageComponent alt="" src="../assets/img/rocketart.png" className="div_img_logo" />

            </div>

            <div className="Container_Input">
                <h3> Nova Senha</h3>
                <InputLoign label={""} className={hasError ? "InputError" : "Input_one"} placeholder="" name={"NewPassword"} typeInput="text" maxlength={255} valueLogin={DiceNewPassword.NewPassword} icon={<FaLock/>} hasError={hasError} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(event);



                }} />

                <h3> Reescreva Sua Senha </h3>
                <InputLoign label={""} className={hasError ? "InputError" :"Input_two"} placeholder="" name={"repetePassword"} typeInput="text" maxlength={255} valueLogin={DiceNewPassword.repetePassword} icon={<FaLock/>} hasError={hasError} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(event);

                }} />

                <p> Conter pelo menos 1 caractere especial, limite de 255 caracteres. </p>

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