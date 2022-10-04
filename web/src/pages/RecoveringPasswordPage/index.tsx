import React ,{useEffect, useState}from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import InputLoign from "../../components/utils/Input/LoginInput";
import InputBtn from "../../components/utils/Button/InputBtn";


const RecoveringPasswordPage = () => {

    const [DiceNewPassword, setDiceNewPassWord] = useState({
    
         "NewPassword":"",
         "repetePassword":""

    });
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
         setDiceNewPassWord({
        ...DiceNewPassword,
        [event.target.name]: event.target.value
         })
    };


    useEffect(()=>{
        console.log(DiceNewPassword)
    }, [DiceNewPassword])


    const [hasError, setHasError] = React.useState(false);


    const validate = () =>{
    // validar se campo são iguais, e se existe 1 caractere especial
           
    }


    return (

        <main className="RecoveringPasswordPage">
            <div className="Container_logo">

                <ImageComponent alt="" src="../assets/img/rocketart.png" className="div_img_logo" />

            </div>

            <div className="Container_Input">
                <h3> Nova Senha</h3>
                <InputLoign className="Input_one" placeholder="" name="NewPassword" typeInput="text" valueLogin={DiceNewPassword.NewPassword} icon={''} hasError={hasError} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(event);
        
                }} />

                <h3> Reescreva Sua Senha </h3>
                <InputLoign className="Input_two" placeholder="" name={"Repete_New_Password"} typeInput="text" valueLogin={DiceNewPassword.repetePassword} icon={''} hasError={hasError} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(event);

                }} />

                <p> Conter pelo menos 1 caractere especial, limite de 255 caracteres. </p>

                <div className="Input_btn">

                <InputBtn className="Next_NewPassWord" name="Btn_Next_NewPassWord" valueBtn="Confirmar" typeInput="Submit" onClick={() =>{

                    console.log("enviar");
                }}/>


            </div>

            </div>

            
        </main>

    );


}


export default RecoveringPasswordPage;