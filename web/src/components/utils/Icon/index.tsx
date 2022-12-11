import React, { ReactNode } from "react";


interface Iconbar {
    Icon: JSX.Element,
    text: string,
    className: string
}

const IconBar = ({ Icon, text, className }: Iconbar) => {


    return (


        <span id="IconBar" className={className}>
            <div >
                <span className="iconBar-image">{Icon} </span>
                <h3 className="iconBar-text">{text}</h3>

            </div>



        </span>

    )


}


export default IconBar;