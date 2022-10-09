import React from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";



const ConfirmEmailWarningPage = () => {

    return (

        <main id="ConfirmEmailPage">
            <span className="logo_Name_pageConfirmEmail">
                <ImageComponent alt="" src="../assets/img/rocketart.png" className="img_logo_mediaSpace_warningPage" />
            </span>


            <div className="tittle_and_img">
                <h1 >  Seu Email Foi Autenticado. </h1>
                <div className="Div_img_center">
                <ImageComponent alt="" src="../assets/img/Email.svg" className="img_email" />
                </div>
              

            </div>





        </main>

    );
}


export default ConfirmEmailWarningPage;