import React from "react";
import IconBar from "../../utils/Icon";
import { FaCheck } from "react-icons/fa";

interface IIcard {
    CardClasse: string,
    percentage:string,
    desciption:string,
    layout:string,
    issue:string,
    numberissue:number,
    value :number
  


}

const CardShip = ({CardClasse,percentage,desciption,layout,issue,numberissue,value}:IIcard) => {

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
                    <h2>{layout?layout:"Layout"}</h2>
                    <h3>{desciption}</h3>
                </span>
                <div className="value_and_percentage">
                    <h2>Porcentagem do valor: {percentage}% </h2>
                    <h2> valor = R${value}</h2>
                    
                </div>
            </div>
        </>
    );

}

export default CardShip;