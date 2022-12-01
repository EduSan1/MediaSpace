import React, { ReactNode, useState } from "react";


interface IISelect {
    optValue: String,
    classnameOption: any,
    idSelect: string,
    icon: ReactNode
}


const InputSelect = ({ optValue, classnameOption, idSelect, icon }: IISelect) => {

    const [select, selected] = useState("")
    console.log(selected)

    return (
        <div className="allSelect">
            <span>
                {icon}
            </span>
            <select className={'P_serselecet'} id={idSelect} onChange={({ target }) => { selected(target.value) }}>
                <option className={classnameOption ? classnameOption : "P_option"} value="valor1">Em aberto</option>``
                <option className={classnameOption ? classnameOption : "P_option"} value="valor1">Em Execução</option>``
                <option className={classnameOption ? classnameOption : "P_option"} value="valor1">Finalizados</option>``
            </select>
        </div>
    )

}



export default InputSelect;