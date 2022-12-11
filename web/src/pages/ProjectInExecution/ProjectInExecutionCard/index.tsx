import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProject {
    id: string
    name: string,
    description: string,
    image: { url: string }[],
    user: {
        first_name: string
        nickname: string
        profile_picture: string
    },
    freelancer: {
        first_name: string
        nickname: string
        profile_picture: string
    }
}

const ProjectInExecutionCard = ({ id, name, description, image, user, freelancer }: IProject) => {

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate(`/projects/${id}`)} className="project-card">



            <div className="project-card-user-execution">
                <div>
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
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
            </div>

            <div className="project-card-freelancer-details">
                <p>Em execução por:</p>
                <div className="project-in-execution-freelancer-container">
                    <img src={freelancer.profile_picture} alt={"freelancer"} />
                    <div className="details">
                        <p>{freelancer.first_name}</p>
                        <p>@{freelancer.nickname}</p>
                    </div>
                </div>
            </div>



        </div>

    );
}

export default ProjectInExecutionCard;