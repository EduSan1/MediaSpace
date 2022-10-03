import React from "react";

interface ITitle{
classNameText:string,
title:string,
idConatinerDiv:string


}



const TitleIndex = ({idConatinerDiv,classNameText,title}:ITitle) =>{

  
    return(

     <div id={idConatinerDiv}>

        <span className={classNameText}> {title} </span>       
  
     </div>
    
    
    
    )
    
    ;


}

export default TitleIndex;