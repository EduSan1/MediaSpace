import React, {useState,useEffect} from "react";
import IconBar from "../../utils/Icon";
import { FaCheck } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri"
import api from "../../../service";
import ModalRequirements from "../../../components/RequirementsModal";

interface IIcard {
    CardClasse: string,
    percentage:string,
    desciption:string,
    layout:string,
    issue:string,
    numberissue:number,
    value :number,
    idUserCreater: boolean,
    requirementId:string
    useEffect:  any
}

export const CardShip = ({CardClasse,percentage,desciption,layout,issue,numberissue,value}:IIcard) => {

    const [check, setCheck] = React.useState(false)

    return (
        <>
            <div className={CardClasse?CardClasse:"Compainter_CardShip"}>
                <span className={"input_Confirmation"}>
                   <div className="verification">
                      <IconBar Icon={<FaCheck/>} className={"iconCheck"} text=""/>
                   </div>
                    <h2>{numberissue} - {issue?issue:"Entregue"}</h2>
                </span>
                <span className="lyout_Description">
                    <h2>{layout}</h2>
                    <h3>{desciption}</h3>
                </span>
                <div className="value_and_percentage">
                    <h2>Porcentagem do valor: {percentage}%</h2>
                    <h2> valor = R${value}</h2>
                </div>
            </div>
        </>
    );

}
export const CardShipRegister = ({CardClasse,percentage,desciption,layout,numberissue,value, idUserCreater,requirementId, useEffect}:IIcard) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const deleteRequirement = () =>{
            api.delete(`/requirement/${requirementId}`).then((res: any) => {  
            })
    }

    

    return (
        <>
            <div className={CardClasse?CardClasse:"Compainter_CardShip"}>
                <span className={"input_Confirmation"}>
                    <h2>{numberissue} - {layout}</h2>
                    <div className={idUserCreater?"verification_creater":"verification"}>
                        <span onClick={()=>{ setIsModalVisible(true)}}>
                            <IconBar Icon={<FiEdit/>} className={"iconCheck"} text=""/>
                        </span>

                        {isModalVisible ? <ModalRequirements requirementId={requirementId} onClose={() =>{setIsModalVisible(false)}} /> : null}
                           
                   </div>
                   <div className={idUserCreater?"verification_creater":"verification"}>
                        <span onClick={()=>{ deleteRequirement()}}>
                            <IconBar Icon={<RiDeleteBin5Line/>} className={"iconCheck"} text=""/>
                        </span>   
                   </div>
                </span>
                <span className="lyout_Description">
                    <h2></h2>
                    <h3>{desciption}</h3>
                </span>
                <div className="value_and_percentage">
                    <h2>Porcentagem do valor: {percentage}%</h2>
                    <h2> valor = R${value}</h2>
                </div>
            </div>
        </>
    );

}

