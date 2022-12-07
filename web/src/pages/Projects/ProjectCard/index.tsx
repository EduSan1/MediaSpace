import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCategories from "../../../components/utils/Button/Categories/Categories";
import CategoryCard from "../../../components/utils/CategoryCard";

interface IProject {
    id: string
    name: string,
    description: string
    value: number
    image: [{ "url": string }]
    categories: any
    user: {
        first_name: string
        nickname: string
        profile_picture: string
    },

    onClick: () => void

}

const ProjectCard = ({ id, name, description, value, image, categories, user, onClick }: IProject) => {



    return (
        <div onClick={() => onClick()} className="project-list-card">
            <div className="project-list-card-image-container">
                <img src={image[0].url} alt="" />
            </div>

            <div className="project-card-user">
                <div className="project-card-user-image">
                    <img src={user.profile_picture} alt="" />

                </div>
                <div className="project-card-user-details">
                    <p>{user.first_name}</p>
                    <p>@{user.nickname}</p>
                </div>
            </div>

            <div className="project-card-details-container">
                <div className="project-card-details">
                    <p>{name}</p>
                    <p>{description}</p>
                </div>

                <div className="project-card-details-value-container">
                    <p>Valor estimado:</p>
                    <p>R$ {value}</p>
                </div>
            </div>

            <div className="project-card-categories">
                <CategoryCard category={categories[0].name} icon={categories[0].icon} key={categories[0].id} />
                {
                    categories[1] &&
                    <CategoryCard category={categories[1].name} icon={categories[1].icon} key={categories[1].id} />

                }
                {
                    categories.length > 2 ? <p>...</p> : null
                }
            </div>
        </div>

    );
}

export default ProjectCard;