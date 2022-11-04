import React from "react";
import { Link } from "react-router-dom";

interface IItrack {
     name: string,
     link: any,
     classSpanDiv:string
}


const HistoryTrack = ({ name, link, classSpanDiv }: IItrack) => {

     return (

          <span className={classSpanDiv}>

               <Link to={link} className="LinkText">
                    <h5> Perfil - {name} </h5>
               </Link>

          </span>
     )

}




export default HistoryTrack;