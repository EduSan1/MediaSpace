import React from "react";
import Checkbox from "../../utils/Input/checkbox/InputCheckbox";

const ToggleButton = () => {

   return (
      <>
         <div className="container_aligment">
            <div>
                <h2>Tema:</h2>
            </div>
            
            <label className="switch">
               <input type="checkbox" />
               <span className="slider"></span>
            </label>
         </div>
     

         
      </>
   )
}

export default ToggleButton