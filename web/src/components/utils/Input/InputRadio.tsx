import React from "react";

interface IInputRadio {
   label: string,
   options: string[],
   name: string
}

const InputRadio = ({ label, options, name }: IInputRadio) => {
   return (
      <>
         <div className="container_input_radio">
            <div className="container_label">
               <label>{label}</label>
            </div>
            <div className="container_options">
               {options.map((option) => (
                  <label>
                     <input type="radio" value={option} name={name}/>
                     {option}
                  </label>
               ))}
            </div>

         </div>
      </>
   );
}

export default InputRadio;


