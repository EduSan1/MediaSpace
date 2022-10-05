import React from "react";
import SucessRegister from "../../pages/SucessRegister/SucessRegister";
import "../../styles/components/SpacebackgroundLogin/index.scss";
import ConcludeRegister from "../ConcludeRegister/ConcludeRegister";
import SendingEmailRecovery from "../../pages/SendingEmailRecovery";
import ProviderUserRegister from "../../pages/ProviderUserRegister";
import RecoveryPassword from "../../pages/Recoverypassword";
import RegisterSpace from "../Register";


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
          {/* <ProviderUserRegister/> */}
          <RegisterSpace/>
          {/* <RecoveryPassword /> */}
        </main>


        <span className="Space">
          <img src="../assets/img/backSpace.png" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;