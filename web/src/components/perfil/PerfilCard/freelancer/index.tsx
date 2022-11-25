import React from "react";
import CategoryCard from "../../../utils/CategoryCard";

interface IuserProfile{
    first_name: string,
    nickname: string,
    profile_picture: string,
    biography:string,
     categories:[
        {
            name:any,
            icon: any
        }
    ],
}



const PerfilCardFreelancer = ({first_name,nickname,profile_picture,biography,categories}:IuserProfile) => {


    return (
        <div className="perfil_card">
            <div className="photo_and_name_user">
                <div className="img_photo_user">
                    <img src="../assets/img/astronaut.svg" alt="" />
                </div>

                <span className="InfoName_user">
                    <h2>{first_name}</h2>
                    <h4>@{nickname}</h4>
                </span>
            </div>
          
            <div className="fallow_project"></div>
            <div className="category_freelancer">
                {

                    categories.map((categoryUser:any)=>{
                        return(
                            <CategoryCard category={categoryUser.name} icon={categoryUser.icon} />
                        )
                    })
                
                }
              
             

            </div>

            <span className="line"></span>

            <span className="description_user">
                <p>
                 {biography}
                </p>
            </span>

            <div>

            </div>
        </div>

    )

}




export default PerfilCardFreelancer;