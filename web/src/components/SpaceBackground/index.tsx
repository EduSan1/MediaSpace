import React from "react";
import SucessRegister from "../../pages/SucessRegister/SucessRegister";
import "../../styles/components/SpacebackgroundLogin/index.scss";
import ConcludeRegister from "../ConcludeRegister/ConcludeRegister";
import SendingEmailRecovery from "../../pages/SendingEmailRecovery";
import ProviderUserRegister from "../../pages/ProviderUserRegister";
// import RecoveryPassword from "../../pages/Recoverypassword";
import ConfirmEmailWarningPage from "../../pages/ConfirmEmailWarningPage";
import PasswordWarningPage from "../../pages/PasswordWarningPage";
import RecoveringPasswordPage from "../../pages/RecoveringPasswordPage";
import RegisterSpace from "../Register";
import ButtonIcon from "../utils/Button/ButtonIcon";
import { FaLock } from "react-icons/fa";
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
        
       
        <main className="SpaceLogin"> 
        {component}
        </main>



        <span className="Space">
          <img src="../assets/img/backSpace.png" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;