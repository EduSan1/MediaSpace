import React from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";




const PasswordWarningPage = () => {

  return (

    <main className="PasswordWarningPage">
      <div className="Container_logo">

        <ImageComponent alt="" src="../assets/img/rocketart.png" className="div_img_logo" />

      </div>



      <div className="tittle_updated">

        <h3>Senha Atualizada</h3>
        <ImageComponent alt="" src="../assets/img/verification.svg" className="" />
      </div>


    </main>


  );


}

export default PasswordWarningPage;