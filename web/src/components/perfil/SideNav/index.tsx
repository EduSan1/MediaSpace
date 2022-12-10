import React, { ReactNode, useState } from "react";
import IconBar from "../../utils/Icon";
interface IInput {
    icon: ReactNode,
    className: string,
    icon2: ReactNode
    icon3: ReactNode
    icon4: ReactNode
    icon5: ReactNode,
    onClick: () => void,
    setCurrentPage?: React.Dispatch<React.SetStateAction<string>>

}


const SideNav = ({ icon, icon2, icon3, icon4, icon5, className, onClick, setCurrentPage }: IInput) => {




    return (

        <div className="All_div">
            <div className={className ? className : "side_nav"}>

                {
                    setCurrentPage &&
                    <span>
                        <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FportfolioIcon2.png?alt=media&token=150dfd25-70f7-4db6-aecd-4642acef39f5" alt="" onClick={() => setCurrentPage("portfolio")} />
                    </span>
                }


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