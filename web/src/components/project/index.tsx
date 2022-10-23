import React from "react";


interface IInputserve{
    type:string,
    name:string,
    nickname:string
}

const Interestedserver = ({type,name,nickname}:IInputserve) =>{

    return(

        <>
           
           <div className="Container_selection"> 
               <div className="photo_user_perfil">
                       <img src="../assets/img/astronaut.svg" alt="" />
               </div>
               <div className="name_nickname">

                  <h3>{name}</h3>
                   <h5>{nickname}</h5>
               </div>
               <div className="option_select">
                  <input type={type} id="Radio_select" name="select_user" value="Abrir perfil" />
               </div>
           </div>
         
        </>
    )
}


export default Interestedserver