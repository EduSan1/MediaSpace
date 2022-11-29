import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProject {
    id: string
    name: string,
    description: string,
    image: [{ "url": string }],
    user: {
        first_name: string
        nickname: string
        profile_picture: string
    },
    management: {
        id: "",
        payment_confirmed: false,
        payment_date: "",
        payment_type: "",
        create_at: "",
        update_at: "",
        team_project_management: [
            {
                id: "",
                is_active: false,
                team: {
                    id: "",
                    name: "",
                    nickname: "",
                    description: "",
                    profile_picture: "",
                    general_evaluation: 0,
                    status: false,
                    is_active: false,
                    is_freelancer: false,
                    create_at: "",
                    update_at: "",
                    categories: [
                        {
                            id: "",
                            name: "",
                            icon: "",
                            is_active: false,
                        }
                    ],
                    sub_categories: [
                        {
                            id: "",
                            name: "",
                            is_active: false
                        }
                    ]
                }
            }],
        members: []
    }
    // management: {
    //     team_project_management: [
    //         {
    //             team: {
    //                 name: "",
    //                 nickname: "",
    //                 profile_picture: "",
    //             }
    //         }]
    // }
}

const ProjectInExecutionCard = ({ id, name, description, image, user, management }: IProject) => {

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

             <div className="project-card-freelancer">
                <div className="project-card-freelancer-image">
                    {/* <img src={management.team_project_management[0].team.profile_picture} alt="" /> */}

                </div>
                <div className="project-card-freelancer-details">
                    <p>Em execução por:</p>
                    <p>{management.team_project_management[0].id}</p>
                    {/* <p>{management.team_project_management[0].team.name}</p>
                    <p>@{management.team_project_management[0].team.nickname}</p> */}
                </div>
            </div> 


        </div>

    );
}

export default ProjectInExecutionCard;