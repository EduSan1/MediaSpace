import React from "react";
import MailConfirmed from "../../components/MailConfirmed";
import SpaceBackground from "../../components/SpaceBackground/index";

const MailConfirmedPage = () =>{

    return(
   
        <>
        <main id="LoginPage">

        <SpaceBackground component={<MailConfirmed/>}/>   

        </main>
         
        </>
  
    );
}

export default MailConfirmedPage;