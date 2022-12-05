import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import jwt from "jwt-decode"
import api from "../../service";
import PreviewProjectCreator from "./Creator";
import PreviewProjectFreelancer from "./Freelancer";


const PreviewProject = () => {
    const { projectId } = useParams()

    const [createrProject, setCreaterProject] = useState("")
    const [isCreater, setIsCreater] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const typeProjectPreview = () => {

        api.get(`/project/${projectId}`).then((res: any) => {
            setCreaterProject(res.data.data.user.id)
            const userJwt = localStorage.getItem('userDetails');
            const user: any = jwt(userJwt ? userJwt : "")
            setIsCreater(user.userDetails.id === res.data.data.user.id)
        })


        // let isCreater = false

        // if (createrProject === userId) {
        //     isCreater = true
        // }
        // return isCreater
    }

    useEffect(() => {
        typeProjectPreview()
    }, [])

    useEffect(() => {
        setIsLoading(false)
    }, [isCreater])

    return (
        <>
            {!isLoading &&
                isCreater ? <PreviewProjectCreator /> : <PreviewProjectFreelancer />
            }
        </>
    )
}

export default PreviewProject;