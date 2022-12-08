import React, { ReactNode, useEffect, useState } from "react";





interface IISelect {
    classnameOption: any,
    idSelect: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    optiondisable : boolean

}


const InputSelectFreelancer = ({ classnameOption, idSelect, onChange,  optiondisable }: IISelect) => {

    const [currentPage, setCurrentPage] = useState(optiondisable);
  
   
  console.log(optiondisable)

    useEffect(() => {
        setCurrentPage(optiondisable)
    }, [currentPage])
    return (
        <div className="allSelect" >
            {
                currentPage &&
                <select className={'P_serselecet'} id={idSelect} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)}>
                    <option className={classnameOption ? classnameOption : "P_option"} value="AWAITING_START"  >Em aberto</option>
                    <option className={classnameOption ? classnameOption : "P_option"} value="IN_EXECUTION" >Em Execução</option>
                    <option className={classnameOption ? classnameOption : "P_option"} value="VALIDATING_REQUIREMENTS">Validando requesitos</option>
                    <option className={classnameOption ? classnameOption : "P_option"} value="CANCELED">Cancelado</option>
                    <option className={classnameOption ? classnameOption : "P_option"} value="COMPLETE">Concluido</option>
                </select>

            }
            {
                currentPage == false &&

                <select className={'P_serselecet'} id={idSelect} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => onChange(event)}>
                    <option className={classnameOption ? classnameOption : "P_option"} value="IN_EXECUTION" >Em Execução</option>
                    <option className={classnameOption ? classnameOption : "P_option"} value="VALIDATING_REQUIREMENTS">Validando requesitos</option>
                    <option className={classnameOption ? classnameOption : "P_option"} value="CANCELED">Cancelado</option>
                    <option className={classnameOption ? classnameOption : "P_option"} value="COMPLETE">Concluido</option>
                </select>
            }

        </div>
    )

}



export default InputSelectFreelancer;