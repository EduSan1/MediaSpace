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
import LoginSpace from "../Login";

interface ISpaceBackground {
  component : JSX.Element
}

const SpaceBackground = ({component} : ISpaceBackground) => {

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
        {component}
>>>>>>> 3f214b3eaf5b1a8d3bea6163db42b2661845fa43
        </main>



        <span className="Space">
          <img src="../assets/img/backSpace.png" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;