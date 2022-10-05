import React from "react";

interface IComponentImg{
  
    className:string,
    src:string,
    alt:string


}

const ImageComponent = ({className,src,alt}:IComponentImg) => {

    return (

        <>

        <div className={className}>

            <img className="ImgMain" src={src} alt={alt} />
            

        </div>

        </>

    );


}

export default ImageComponent;