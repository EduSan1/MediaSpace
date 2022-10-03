import React from "react";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";



const ConfirmEmailWarningPage = () => {

    return (

        <main id="ConfirmEmailPage">
            <span className="logo_Name_pageConfirmEmail">
                <ImageComponent alt="" src="../assets/img/MediaSpacenewlogo.svg" className="img_logo_mediaSpace_warningPage" />
            </span>

            <span className="tittle">
                  <h1>  Seu Email Foi Autenticado. </h1> 
            </span>
               
           

            <span className="img_email_span">
                <ImageComponent alt="" src="../assets/img/Email.svg" className="img_email" />
            </span>



        </main>

    );
}


export default ConfirmEmailWarningPage;