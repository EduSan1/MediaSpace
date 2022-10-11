import React from "react";

interface IButtonCategories {
   name: string,
   className: string,
   valueBtn: string,
   icon: string,
 
}

const ButtonCategories = ({ name, className, valueBtn, icon }: IButtonCategories) => {
   return (
      <>
         <button name={name} className={className} value={valueBtn} >
            {valueBtn}
            <img src={icon} className="teste"/>
         </button>
      </>
   );

}

export default ButtonCategories;