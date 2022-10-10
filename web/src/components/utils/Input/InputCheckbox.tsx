import React from "react";

interface InputCheckbox {
   options: string[]
   value: string[]
   setValue: any
}


const Checkbok = ({ options, value, setValue }: InputCheckbox) => {
   const handleChange = ({ target }: any) => {
      if (target.checked) {
         setValue([...value, target.value]);
      } else {
         setValue(value.filter((itemValue) => itemValue !== target.value));
      }
   }

   return (
      <div className="container_checkbox">
         {options.map((option) => (
            <label>
               <input className="item_checkbox" type="checkbox" value={option} checked={value.includes(option)}
                  onChange={handleChange} /> {option}
            </label>
         ))}
      </div>
   )
}

export default Checkbok;      