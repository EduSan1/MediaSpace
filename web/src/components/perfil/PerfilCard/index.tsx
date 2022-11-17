import React from "react";
import NavegationBar from "../../utils/navegation";



const PerfilCard = () =>{


    return(
        <div className="perfil_card">
          <div className="photo_and_name_user">
                <div className="img_photo_user">
                    <img src="../assets/img/astronaut.svg" alt="" />
                </div>
                
                <span className="InfoName_user">
                        <h2>marcus</h2>
                        <h4>@MarcusLindo</h4>
                    </span>
          </div>
            <div>
             
            </div>
            <NavegationBar/>
         </div>
    
    )

}




export default PerfilCard;