import React from "react";
import { useNavigate } from "react-router-dom";

interface IComponentImg{
  
    className:string,
    src:string,
    alt:string


}

const ImageComponent = ({className,src,alt}:IComponentImg) => {

    
    return (

        <>

        <div className={className}>
            <img className="ImgMain" src={src} alt={alt} onClick={()=>{
            }}/>
            

        </div>

        </>

    );


}

export default ImageComponent;