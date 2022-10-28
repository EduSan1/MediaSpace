import React from "react";

interface ICategoryCard {
    category: string,
    icon: string,
}

//setSubCategories

const CategoryCard = ({ category, icon }: ICategoryCard) => {



    return (
        <>
            <button value={category} className="category_selected" >
                {category}
                <img src={icon} className="icone" />
            </button>
        </>
    );

}

export default CategoryCard;