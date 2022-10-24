import React from "react";
import { useJwt } from "react-jwt";
import SearchBar from "../../components/HeaderPage/Search";
import NavegationBar from "../../components/utils/navegation";

const Eventes= () => {

    const user = localStorage.getItem('userDetailes');
    const { decodedToken, isExpired } = useJwt(user ? user : "");
    
    return (

        
            <main id="ContentPage">

                <NavegationBar user={user} />
                <div className="Container">
                    <SearchBar />
                    <section className="section_main"> Eventes</section>
                </div>
            </main>

        

    );
}

export default Eventes;