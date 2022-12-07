import React, { ReactNode, useState } from "react";
import IconBar from "../../utils/Icon";
interface IInput {
    icon: ReactNode,
    className: string,
    icon2: ReactNode
    icon3: ReactNode
    icon4: ReactNode
    icon5: ReactNode,
    onClick:() => void
    
}


const SideNav = ({ icon, icon2,icon3,icon4,icon5, className, onClick }: IInput) => {




    return (

        <div className= "All_div">
            <div className={className? className  : "side_nav"}>
                <span>
                  
                    <img src="../assets/img/perfil/projects.png" alt="" onClick={onClick} />
                    
                    
                </span>
                <span>
                    {icon2}
                </span>
                
                
            </div>

        </div>
    )
}

export default SideNav;