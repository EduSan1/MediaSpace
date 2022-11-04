import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { decodeToken, useJwt } from "react-jwt";
import api from "../../service";


const PreviewProject = async () => {
    const { projectId } = useParams()
    console.log(projectId)

    const [createrProject, setCreaterProject] = useState([])

    //const user = await localStorage.getItem('userDetails');
    //const { decodedToken, isExpired } = useJwt(user ? user : "");
    
    //console.log(decodedToken)
     
    
    useEffect(()=>{
        api.get(`/project/${projectId}`).then((res: any) => {
            setCreaterProject(res.data.data.user.id)
        
        })},[])

        const typeProjectPreview = () => {
            //if(createrProject === decodedToken){}
            
        }

    
    return(
        <>
            <div>
                
            </div>
        
        </>
    )
}

export default PreviewProject;