import React from "react";

interface ICategoryCard {
    category: string,
    icon: string,
}

//setSubCategories

const CategoryCard = ({ category, icon }: ICategoryCard) => {



    return (
        <>
            <button value={category} className="button_category" >
                <p className="button_category_text">{category}</p>
                <img src={icon} className="icone" />
            </button>

        </>
    );

}

export default CategoryCard;