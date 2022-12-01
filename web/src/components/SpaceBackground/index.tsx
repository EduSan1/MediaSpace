import React from "react";
import SucessRegister from "../../pages/SucessRegister/SucessRegister";
import "../../styles/components/SpacebackgroundLogin/index.scss";
import ConcludeRegister from "../ConcludeRegister/ConcludeRegister";
import SendingEmailRecovery from "../../pages/SendingEmailRecovery";
import ProviderUserRegister from "../../pages/ProviderUserRegister";
import ConfirmEmailWarningPage from "../../pages/ConfirmEmailWarningPage";
import PasswordWarningPage from "../../pages/PasswordWarningPage";
import RecoveringPasswordPage from "../../pages/RecoveringPasswordPage";
import RegisterSpace from "../Register";
import RegisterFreelancer from "../../pages/RegisterFreelancer";
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
          <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FlogoColorPlay.png?alt=media&token=6a99a7e2-f527-4cb6-a6b2-532babc7b078" />
        </span>
        

        <main className="SpaceLogin"> 
        {component}
        </main>



        <span className="Space">
          <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbackgroundPattern.png?alt=media&token=6a28434f-c869-4651-b519-26ccf58ab805" />
        </span>
      </div>

    </>

  );
}

export default SpaceBackground;