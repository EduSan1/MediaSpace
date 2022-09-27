import React from "react";
import "../../styles/components/SpacebackgroundLogin/index.scss";
import RegisterSpace from "../Register";
import LoginSpace from "../Login/index";


const SpaceBackground = () => {

  return (

    <>
      <div className="backSpace">
        <span className="MediaSpaceLogo">
          <img src="../assets/img/MediaSpaceLogo.png" />
        </span>

        <main className="SpaceLogin">
         {/* <RegisterSpace />*/}
           <LoginSpace /> 
        </main>



        <span className="Space">
          <img src="../assets/img/backSpace.png" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;