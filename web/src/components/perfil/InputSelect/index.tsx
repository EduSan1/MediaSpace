import React, { ReactNode, useState } from "react";





interface IISelect {
    classnameOption: any,
    idSelect: string,
    setSelectedProjects: React.Dispatch<React.SetStateAction<[]>>
}


const InputSelect = ({ classnameOption, idSelect, setSelectedProjects }: IISelect) => {
    const [select, selected] = useState("")

    return (
        <div className="allSelect">
            <select className={'P_serselecet'} id={idSelect} onChange={({ target }) => { selected(target.value) }}>
                <option className={classnameOption ? classnameOption : "P_option"} value="valor1">Em aberto</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="valor2">Em Execução</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="valor3">Finalizados</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="valor4">Cancelado</option>``
                <option className={classnameOption ? classnameOption : "P_option"} value="valor5">Concluido</option>``
            </select>
        </div>
    )

}



export default InputSelect;