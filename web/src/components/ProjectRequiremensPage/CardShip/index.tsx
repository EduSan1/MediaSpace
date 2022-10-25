import React from "react";

interface IIcard {
    CardClasse: string,
    percentage:number,
    desciption:string,
    layout:string,
    issue:string,
    numberissue:number
  


}

const CardShip = ({CardClasse,percentage,desciption,layout,issue,numberissue}:IIcard) => {

    return (
        <>
            <div className={CardClasse?CardClasse:"Compainter_CardShip"}>
                <span className="input_Confirmation">
                    <input type='checkbox'/>
                    <h2>{numberissue} - {issue?issue:"Entregue"}</h2>
                </span>
                <span className="lyout_Description">
                    <h2>{layout?layout:"Layout"}</h2>
                    <h3>{desciption}</h3>
                </span>
                <div className="value_and_percentage">
                    <h2>Porcentagem do valor: {percentage}% </h2>
                    
                </div>
            </div>
        </>
    );

}

export default CardShip;