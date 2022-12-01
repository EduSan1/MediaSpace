import React, {useState, useEffect} from 'react';
import jwt from "jwt-decode"
import api from "../../service";
import ProfileClient from  "./Cliente"
import ProfileFreelancer from "./Freelancer";

const Profile = ()=> {

    const typeProfile = () => {
        const userJwt = localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "")
        const userId = user.userDetails.id
        
        let isClient = false
    
        if (user.userDetails.teams.length === 0) {
            isClient = true
        }
        return isClient
    }

    return(
        <>
            {typeProfile()? <ProfileClient/> : <ProfileFreelancer/>}
        </>
    )

}

export default Profile;

