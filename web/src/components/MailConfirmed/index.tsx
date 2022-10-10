import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageComponent from "../../components/utils/imageComponent/imageComponent";
import api from "../../service";



const ConfirmEmailWarningPage = () => {

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const userId = urlParams.get("user")
        console.log(userId)
        api.post(`/user/authentication/${userId}`).then((res : any) => {
            console.log(res.data)
        })
    }, [])

    return (

        <main id="ConfirmEmailPage">

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