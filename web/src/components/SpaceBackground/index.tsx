import React from "react";
import SucessRegister from "../../pages/SucessRegister/SucessRegister";
import "../../styles/components/SpacebackgroundLogin/index.scss";
import ConcludeRegister from "../ConcludeRegister/ConcludeRegister";
import LoginSpace from "../Login/Index";
import SendingEmailRecovery from "../../pages/SendingEmailRecovery";
import ProviderUserRegsiter from "../../pages/ProviderUserRegister";


const SpaceBackground = () => {

  return (

    <>
      <div className="backSpace">
        <span className="MediaSpaceLogo">
          <img src="../assets/img/MediaSpaceLogo.png" />
        </span>
        
       
        <main className="SpaceLogin"> 
         {/* <LoginSpace/> */}
        {/* <SucessRegister/> */}
        {/* <SendingEmailRecovery/> */}
        <ProviderUserRegsiter/>
        </main>
        
      
        <span className="Space">
          <img src="../assets/img/backSpace.png" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;