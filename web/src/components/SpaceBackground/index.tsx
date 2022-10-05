import React from "react";
import SucessRegister from "../../pages/SucessRegister/SucessRegister";
import "../../styles/components/SpacebackgroundLogin/index.scss";
import ConcludeRegister from "../ConcludeRegister/ConcludeRegister";
import SendingEmailRecovery from "../../pages/SendingEmailRecovery";
import ProviderUserRegister from "../../pages/ProviderUserRegister";
import RecoveryPassword from "../../pages/Recoverypassword";
import ConfirmEmailWarningPage from "../../pages/ConfirmEmailWarningPage";
import PasswordWarningPage from "../../pages/PasswordWarningPage";
import RecoveringPasswordPage from "../../pages/RecoveringPasswordPage";
import RegisterSpace from "../Register";


const SpaceBackground = () => {

  return (

    <>
      <div className="backSpace">
        <span className="MediaSpaceLogo">
          <img src="../assets/img/MediaSpaceLogo.png" />
        </span>
<<<<<<< HEAD


        <main className="SpaceLogin">
          {/* <LoginSpace/> */}
          {/* <SucessRegister/> */}
          {/* <SendingEmailRecovery/> */}
          {/* <ProviderUserRegister/> */}
          <RegisterSpace/>
          {/* <RecoveryPassword /> */}
=======
        
       
        <main className="SpaceLogin"> 
         {/* <LoginSpace/> */}
        {/* <SucessRegister/> */}
        {/* <SendingEmailRecovery/> */}
        {/* <ProviderUserRegsiter/> */}
        {/* <RecoveryPassword/> */}
        {/* <ConfirmEmailWarningPage/> */}
        {/* <PasswordWarningPage/> */}
        {/* <RecoveringPasswordPage/> */}

        <RegisterSpace/>
>>>>>>> 385f04ca39c6d3aac02ec9c9e927185c9d0dca70
        </main>


        <span className="Space">
          <img src="../assets/img/backSpace.png" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;