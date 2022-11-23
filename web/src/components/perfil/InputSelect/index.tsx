import React, { ReactNode } from "react";


interface IISelect {
    optValue: String,
    classnameOption: any,
    idSelect: string,
    icon:ReactNode
}


const InputSelect = ({ optValue, classnameOption, idSelect,icon }: IISelect) => {

    return (
        <div className="allSelect">
           <span>
            {icon}
           </span>
            <select className={'P_serselecet'} id={idSelect}>

                <option className={classnameOption ? classnameOption : "P_option"} value="valor1">{optValue}</option>
            </select>
        </div>
    )

}



export default InputSelect;