import React from "react";

interface InputCheckbox {
   nameOption: string
   onClickFunction: ( check : boolean) => void
}


const Checkbox = ({ nameOption, onClickFunction }: InputCheckbox) => {

   const [check, setCheck] = React.useState(false)

   const onClickInput = () => {
      setCheck(!check)
      onClickFunction(check)
   }

   return (
      <div >
         <label className="container_checkbox" >

            <input checked={check} className="item_checkbox" type="checkbox" id="" onClick={() => onClickInput()} value={nameOption} /> {nameOption}

         </label>
      </div >
   )

}

export default Checkbox;      