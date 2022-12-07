import React, { ReactNode } from "react";
import IconBar from "../../utils/Icon";
interface IInput {
    icon: ReactNode,
    className: string,
    icon2: ReactNode
    icon3: ReactNode
    icon4: ReactNode
    icon5: ReactNode
}


const SideNav = ({ icon, icon2,icon3,icon4,icon5, className }: IInput) => {

  

    return (

        <div className= "All_div">
            <div className={className? className  : "side_nav"}>
                <span>
                    {icon}
                </span>
                <span>
                    {icon2}
                </span>
                
                
            </div>

        </div>
    )
}

export default SideNav;