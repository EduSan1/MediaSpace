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


        // const userJwt = localStorage.getItem('userDetails');
        // const user: any = jwt(userJwt ? userJwt : "")
        // const userId = user.userDetails.id
        // let isCreater = false

        // if (createrProject === userId) {
        //     isCreater = true
        // }
        // return isCreater
    }

    useEffect(() => {
        typePreviewRequirements()
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [isCreater])

    // useEffect(() => {
    //     api.get(`/project/${projectId}`).then((res: any) => {
    //         setCreaterProject(res.data.data.user.id)

    //     })
    // }, [])

    return (
        <>
            {!isLoading ?
                isCreater ? <ProjectRequirementsClient  /> : <ProjectsrequirementsFreelancer /> : <></>
            }
        </>
    )
}

export default ProjectRequiremensts;