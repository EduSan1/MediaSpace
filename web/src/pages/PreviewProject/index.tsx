import React from "react";
import { useParams } from 'react-router-dom';

const PreviewProject = () => {
    const { projectId } = useParams()
    console.log(projectId)

    if(projectId === "e7049e0e-2243-4d20-987c-382fee430e2a"){
        console.log("teste")
    }

    
    return(
        <>
            <div>
                
            </div>
        
        </>
    )
}

export default PreviewProject;