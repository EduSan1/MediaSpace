import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { decodeToken, useJwt } from "react-jwt";
import api from "../../service";
import { TRUE } from "sass";
import PreviewProjectCreator from "./Creator";
import PreviewProjectFreelancer from "./Freelancer";


const PreviewProject = () => {
    const { projectId } = useParams()
    console.log(projectId)

    const [createrProject, setCreaterProject] = useState("")

    const userJwt = localStorage.getItem('userDetails');
    const { decodedToken, isExpired }: any = useJwt(userJwt ? userJwt : "");

    // console.log(decodedToken)


    useEffect(() => {
        api.get(`/project/${projectId}`).then((res: any) => {
            setCreaterProject(res.data.data.user.id)

        })
    }, [])

    const typeProjectPreview = (createrProject: string) => {
        let isCreater = false
        if (createrProject === decodedToken?.userDetails?.id) {
            isCreater = true
        }
        return isCreater
    }


    return (
        <>
            {
                typeProjectPreview(createrProject) ? <PreviewProjectCreator /> : <PreviewProjectFreelancer />
            }
        </>
    )
}

export default PreviewProject;