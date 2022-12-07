import React, { ReactNode, useState } from "react";





interface IISelect {
    classnameOption: any,
    idSelect: string,
    setSelectedProjects: React.Dispatch<React.SetStateAction<[]>>,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void

}


const InputSelectFreelancer = ({ classnameOption, idSelect, setSelectedProjects, onChange }: IISelect) => {

 
    return (
        <div className="allSelect">
            <select className={'P_serselecet'} id={idSelect} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)}>
                <option className={classnameOption ? classnameOption : "P_option"} value="IN_EXECUTION" >Em Execução</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="VALIDATING_REQUIREMENTS">Validando requesitos</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="CANCELED">Cancelado</option>
                <option className={classnameOption ? classnameOption : "P_option"} value="COMPLETE">Concluido</option>
            </select>
        </div>
    )

}



export default InputSelectFreelancer;