import React from "react";
import { IPost } from "../../../../pages/Perfil/Freelancer";

interface IPostCard {
    post: IPost
}

const PortifolioCard = ({ post }: IPostCard) => {
    return (
        <div className="all_card_Portifolio">
            <div className="image_Portifoli">
                <span>
                    <img src={post.images[0].url} alt="profileImage" />
                </span>
            </div>
            <span className="Text_descript">
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
            </span>
            <div className="photo_category">
                {
                    post.categories.map((category: any) => {
                        return (
                            <button value={category} className="button_category" >
                                {category.name}
                                <img src={category.icon} className="icone" />
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PortifolioCard;