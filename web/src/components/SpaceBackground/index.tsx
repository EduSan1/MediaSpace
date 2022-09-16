import React from "react";
import "../../styles/components/SpacebackgroundLogin/index.scss";


import LoginSpace from "./Login";


const SpaceBackground = () => {

  return (

    <>
      <div className="backSpace">
        <span className="MediaSpaceLogo">
          <img src="../assets/img/MediaSpaceLogo.png" />
        </span>
        
        <LoginSpace/>
      
        <span className="Space">
          <img src="../assets/img/backSpace.png" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;