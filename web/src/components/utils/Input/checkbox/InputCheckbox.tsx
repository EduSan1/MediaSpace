import React from "react";

interface InputCheckbox {
   nameOption: string
}


const Checkbox = ({ nameOption }: InputCheckbox) => {

   const [check, setCheck] = React.useState(false)

   return (
      <div >
         <label className="container_checkbox" >

            <input className="item_checkbox" type="checkbox" id="" onClick={() => setCheck(!check)} value={nameOption} /> {nameOption}

         </label>
      </div >
   )

}

export default Checkbox;      