import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import jwt from "jwt-decode"
import api from "../../service";
import ProjectsrequirementsFreelancer from "../ProjectRequirementsFreelancer";
import ProjectRequirementsClient from "../ProjectRequirementsClient";

const ProjectRequiremensts = () => {
    const { projectId } = useParams()
    console.log(projectId)

    const [createrProject, setCreaterProject] = useState("")
    const [isCreater, setIsCreater] = useState(false)
    const [isLoading, setIsLoading] = useState(true)


    const typePreviewRequirements = () => {

        api.get(`/project/${projectId}`).then((res: any) => {
            setCreaterProject(res.data.data.user.id)
            const userJwt = localStorage.getItem('userDetails');
            const user: any = jwt(userJwt ? userJwt : "")
            setIsCreater(user.userDetails.id === res.data.data.user.id)
        })
    }

    useEffect(() => {
        typePreviewRequirements()
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [isCreater])


    return (
        <>
            {!isLoading ?
                isCreater ? <ProjectRequirementsClient /> : <ProjectsrequirementsFreelancer /> : <></>
            }
        </>
    )
}

export default ProjectRequiremensts;