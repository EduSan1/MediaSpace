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
                <option className={classnameOption ? classnameOption : "P_option"} value="AWAITING_START">Em aberto</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="IN_EXECUTION">Em Execução</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="VALIDATING_REQUIREMENTS">Finalizados</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="CANCELED">Cancelado</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="COMPLETE">Concluido</option>
            </select>
        </div>
    )

}



export default InputSelect;