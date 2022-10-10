import React, { ReactNode } from "react";


interface Iconbar{
      Icon: JSX.Element,
      text:string,
      className:string
}

const IconBar = ({Icon,text,className}:Iconbar) =>{


    return(


    <span id="IconBar" className={className}>
    <span>{Icon} </span>
    <h3>{text}</h3>
   </span>

    )


}


export default IconBar;