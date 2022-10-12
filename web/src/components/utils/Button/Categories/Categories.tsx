import React from "react";

interface IButtonCategories {
   id: string,
   action: () => void
   name: string,
   category: string,
   icon: string,
   //setSubCategories: (id: string, action: "REMOVE" | "ADD") => void
}

//setSubCategories

const ButtonCategories = ({ name, category, icon, action, id }: IButtonCategories) => {

   const [isSelected, setIsSelected] = React.useState(false);

   const onClick = () => {
      setIsSelected(!isSelected)

      //setSubCategories(id, isSelected ? "REMOVE" : "ADD")
   }




   return (
      <>
         <button name={name} value={category} onClick={() => onClick()} className={isSelected ? "category_selected" : "button_category"} >
            {category}
            <img src={icon} className="icone" />
         </button>
      </>
   );

}

export default ButtonCategories;