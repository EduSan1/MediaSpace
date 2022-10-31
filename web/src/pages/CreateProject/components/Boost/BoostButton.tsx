import React from "react";

interface IBoostButton {
   type: string,
   valueBoost: string,
   imageBoost: string,
   label: string
}

const BoostButton = ({ type, valueBoost, imageBoost, label }: IBoostButton) => {
   return (
      <>
         <div className="boost_button">
            <label>{type}</label>
            <p>{valueBoost}</p>
            <div>
               <img src={imageBoost} />
            </div>
            <label>{label}</label>
            <span>
               <input type="radio" name="bootProject" id="" />
            </span>

         </div>
      </>
   )
}

export default BoostButton;