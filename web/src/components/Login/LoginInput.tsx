import React, { ReactNode } from "react";


interface IInput {
    icon : ReactNode,
    typeInput : string,
    placeHolder: string,
}


const InputLoign = ({icon,typeInput, placeHolder} : IInput) =>{
  
    return(
      

        <div className="input_icon_login">
            
             {icon}
            <input className="Input_Login" type={typeInput} name="loginText" placeholder={placeHolder}/>
        
        </div>



    );


}

export default InputLoign;