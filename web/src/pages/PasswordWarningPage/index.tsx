import React from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";




const PasswordWarningPage = () => {

  return (

    <main className="PasswordWarningPage">
  
      <div className="tittle_updated">

        <h3>Senha Atualizada</h3>
        <div className="Div_img_center">
        <ImageComponent alt="" src="../assets/img/verification.svg" className="" />
        </div>
       
      </div>


    </main>


  );


}

export default PasswordWarningPage;