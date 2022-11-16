import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import jwt from "jwt-decode"
import api from "../../service";
import PreviewProjectCreator from "./Creator";
import PreviewProjectFreelancer from "./Freelancer";


const PreviewProject = () => {
    const { projectId } = useParams()
    console.log(projectId)

    const [createrProject, setCreaterProject] = useState("")
 
    const typeProjectPreview = (createrProject: string) => {

        const userJwt = localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "")
        const userId = user.userDetails.id
        let isCreater = false

        if (createrProject === userId) {
            isCreater = true
        }
        return isCreater
    }

    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setCreaterProject(res.data.data.user.id)

        })
    }, [])

    return (
        <>
            {
                typeProjectPreview(createrProject) ? <PreviewProjectCreator/> : <PreviewProjectFreelancer />
            }
        </>
    )
}

export default PreviewProject;