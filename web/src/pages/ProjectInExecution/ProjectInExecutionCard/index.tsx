import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProject {
    id: string
    name: string,
    description: string
    image: [{ "url": string }]
    user: {
        first_name: string
        nickname: string
        profile_picture: string
    }
}

const ProjectInExecutionCard = ({ id, name, description, image, user }: IProject) => {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/projects/${id}`)} className="project-card">
            


            <div className="project-card-user">
                <div className="project-card-user-image">
                    <img src={user.profile_picture} alt="" />

                </div>
                <div className="project-card-user-details">
                    <p>{user.first_name}</p>
                    <p>@{user.nickname}</p>
                </div>
            </div>

            

            <div className="project-card-image-container">
                <img src={image[0].url} alt="" />
                <div className="project-card-details-container">
                    <div className="project-card-details">
                        <p>{name}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProjectInExecutionCard;