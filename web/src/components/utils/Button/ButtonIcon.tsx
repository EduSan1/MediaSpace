import React, { ReactNode } from "react";

interface IButtonIcon {
    typeInput: string,
    name: string,
    className: string,
    valueBtn: string,
    icon: ReactNode,
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void
}



const ButtonIcon = ({ typeInput, name, className, valueBtn, icon, onClick }: IButtonIcon) => {

    return (

        <>
        <div className="Container_btnIcon">
              <span>{icon}</span>
              <input type={typeInput} className={className} name={name} value={valueBtn} onClick={(event: React.MouseEvent<HTMLInputElement>) => onClick(event)}/>
        </div>
            
        </>
    );

}


export default ButtonIcon;