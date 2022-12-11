import React from "react";
import { IPost } from "../../../pages/Perfil/Freelancer";

interface IPostCard {
    post: IPost
}

const PortifolioCardHome = ({ post }: IPostCard) => {
    return (
        <div className="all_card_Portifolio-home">
            <div className="image_Portifoli-home">
                <span>
                    <img src={post.images[0].url} alt="profileImage-home" />
                </span>
            </div>
            <span className="Text_descript-home">
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
            </span>

            <div className="project-card-user">
                <div className="project-card-user-image">
                    <img src={post.team.profile_picture} alt="" />

                </div>
                <div className="project-card-user-details">
                    <p>@{post.team.nickname}</p>
                </div>
            </div>

            <div className="photo_category-home">
                {
                    post.categories.map((category: any) => {
                        return (
                            <button value={category} className="button_category" >
                                <p> {category.name}</p>
                                <img src={category.icon} className="icone" />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PortifolioCardHome;