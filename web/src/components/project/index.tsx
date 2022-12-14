import React from "react";


interface IInputserve{
    type:string,
    name:string,
    photo:string
    nickname:string
    action: () => void
}

const Interestedserver = ({type,name,nickname,photo, action}:IInputserve) =>{

    return(

        <>
           
           <div className="Container_selection"> 
               <div className="photo_user_perfil">
                       <img src={photo} alt="" />
               </div>
               <div className="name_nickname">

                  <h3>{name}</h3>
                   <h5>@{nickname}</h5>
               </div>
               <div className="option_select">
                  <input onClick={() => action()} type={type} id="Radio_select" name="select_user" value="Abrir perfil" />
               </div>
           </div>
         
        </>
    )
}


export default Interestedserver